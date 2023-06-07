<script lang="ts">
	import type { Map } from 'leaflet';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import depotIcon from '$lib/images/depot.png';
	import depots from '$lib/depots';

	const ICON_SIZE = 50;

	let mapElement: HTMLElement;
	let map: Map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([46.878907, 7.284986], 11);

			const icon = leaflet.icon({
				iconUrl: depotIcon,
				iconSize: [ICON_SIZE, ICON_SIZE]
			});

			leaflet
				.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);
			depots.forEach((d) => {
				leaflet.marker(d.coordinates, { icon }).addTo(map).bindPopup(`${d.name}<br>${d.address}`);
			});
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 800px;
	}
</style>
