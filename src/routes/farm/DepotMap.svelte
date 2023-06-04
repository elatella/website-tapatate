<script lang="ts">
	import type { Map } from 'leaflet';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type Depot from './Depot';

	export let depots: Depot[];

	let mapElement: HTMLElement;
	let map: Map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([46.878907, 7.284986], 11);

			leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
			depots.forEach((d) => {
				leaflet.marker(d.location).addTo(map).bindPopup(`Depot ${d.name}`);
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
