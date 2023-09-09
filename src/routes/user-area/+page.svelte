<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-user-area.jpg';
</script>

<Title title={$_('userArea.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('farm.farm.title')}</h3>
			<p>{$_('farm.farm.body1')}</p>
		</div>
	</section>
</div>
