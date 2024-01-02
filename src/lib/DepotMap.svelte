<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Map } from 'leaflet';
	import { locale, _ } from 'svelte-i18n';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import depotIcon from '$lib/images/depot.png';
	import depots from '$lib/depots';

	const ICON_SIZE = 50;

	let mapElement: HTMLElement;
	let map: Map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
			map = leaflet.map(mapElement).setView([46.878907, 7.284986], 11);

			leaflet
				.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			const icon = leaflet.icon({
				iconUrl: depotIcon,
				iconSize: [ICON_SIZE, ICON_SIZE]
			});

			depots.forEach((d) => {
				leaflet
					.marker(d.coordinates, { icon })
					.addTo(map)
					.bindPopup(
						`Depot ${d.name}<br>${d.address}<br><a href="${base}/docs/${
							d.name
						}_${$locale}.pdf" class="anchor">${$_('depots.map.description')}</a>`
					);
			});
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<!-- Workaroun for import bug in Leaflet CSS -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
</svelte:head>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	main div {
		height: 800px;
	}
</style>
