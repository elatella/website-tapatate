<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { addMessages, init, getLocaleFromQueryString } from 'svelte-i18n';
	import de from '$lib/locales/de.json';
	import fr from '$lib/locales/fr.json';
	import Header from './Header.svelte';
	addMessages('de-CH', de);
	addMessages('fr-CH', fr);

	init({
		fallbackLocale: 'de-CH',
		initialLocale: getLocaleFromQueryString('lang')
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<div class="h-24" />
</AppShell>
