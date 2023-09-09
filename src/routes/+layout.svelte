<script lang="ts">
	import '../app.postcss';
	import { AppShell, Modal, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { addMessages, init, getLocaleFromQueryString } from 'svelte-i18n';
	import de from '$lib/locales/de.json';
	import fr from '$lib/locales/fr.json';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	addMessages('de-CH', de);
	addMessages('fr-CH', fr);

	init({
		fallbackLocale: 'de-CH',
		initialLocale: getLocaleFromQueryString('lang')
	});
</script>

<svelte:head>
	<title>TaPatate!</title>
	<meta
		name="description"
		content="TaPatate! ist ein junger Gemüseverein im Raum Bern und Fribourg und steht für frisches, nachhaltig und solidarisch produziertes Gemüse, für ein alternatives Wirtschaftsdenken und eine ehrliche, direkte Verbindung zwischen Produzent*innen und Konsument*innen."
	/>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<div class="h-24" />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<Modal />
