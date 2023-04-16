<script lang="ts">
	import logo from '$lib/images/logo.jpg';
	import { _ } from 'svelte-i18n';
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="text-center max-h-fit">
		<img src={logo} alt={$_('hero.altLogo')} />
	</div>
</div>
