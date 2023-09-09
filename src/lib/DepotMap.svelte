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
		const leaflet = await import('leaflet');
		map = leaflet.map(mapElement).setView([46.878907, 7.284986], 11);

		leaflet
			.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			})
			.addTo(map);
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});

	$: {
		if (browser && map) {
			import('leaflet').then((leaflet) => {
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
							}_${$locale}.pdf">${$_('depots.map.description')}</a>`
						);
				});
			});
		}
	}
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
