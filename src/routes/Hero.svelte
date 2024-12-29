<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import TrialBadge from '$lib/TrialBadge.svelte';
	import logoDe from '$lib/images/logo-de.jpg';
	import logoFr from '$lib/images/logo-fr.jpg';

	$: logo = $locale && $locale.includes('fr') ? logoFr : logoDe;
</script>

<div class="container h-screen mx-auto flex justify-center items-center px-4">
	<div class="lg:h-2/3">
		<TrialBadge size={150} link="{base}/subscriptions" />
		<img src={logo} alt={$_('hero.altLogo')} class="h-full items-start" />
	</div>
</div>
