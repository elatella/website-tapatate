<script lang="ts">
	import { _ } from 'svelte-i18n';
	import medias from '$lib/medias';
</script>

<div class="w-full p-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h1 class="h1">{$_('media.title')}</h1>
			<p><em>{$_('media.subtitle')}</em></p>
		</div>

		<div class="space-y-8">
			{#each medias as media, i (media.date)}
				<div>
					<p><strong>{media.date}</strong>: {$_(`media.${i + 1}`)}</p>
					{#if media.link}
						<p class="mt-4">
							<a href={media.link} target="_blank" class="anchor">{$_('media.link')}</a>
							{$_('media.linkDescription')}
						</p>
					{/if}
					{#if media.audioSrc}
						<audio controls class="mt-4">
							<source src={media.audioSrc} type="audio/mpeg" />
						</audio>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
