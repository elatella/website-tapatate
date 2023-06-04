<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import logoDe from '$lib/images/logo-de.jpg';
	import logoFr from '$lib/images/logo-fr.jpg';

	$: logo = $locale && $locale.includes('fr') ? logoFr : logoDe;
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<img src={logo} alt={$_('hero.altLogo')} class="lg:h-2/3" />
</div>
