<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-user-area.jpg';
</script>

<Title title={$_('userArea.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.adminTool.title')}</h3>
			<a href="https://admin.tapatate.ch" class="btn variant-filled"
				>{$_('userArea.adminTool.title')}</a
			>
			<p>{$_('userArea.adminTool.description')}</p>
		</div>
	</section>
</div>
