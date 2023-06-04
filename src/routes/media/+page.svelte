<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full p-8">
	<section class="container mx-auto flex flex-col max-w-5xl">
		<div class="space-y-4">
			<h1>{$_('media.title')}</h1>
			<p><em>{$_('media.subtitle')}</em></p>
		</div>
	</section>
</div>
