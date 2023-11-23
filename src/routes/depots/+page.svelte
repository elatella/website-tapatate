<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import depots from '$lib/depots';
	import Title from '$lib/Title.svelte';
	import DepotMap from '$lib/DepotMap.svelte';
	import backgroundImage from '$lib/images/bg-depots.jpg';
</script>

<Title title={$_('depots.title')} {backgroundImage} />

<div class="w-full p-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('depots.howTo.title')}</h3>
			<p>
				<a href="{base}/docs/Depots_{$locale}.pdf" class="anchor">{$_('depots.howTo.link')}</a>
				{$_('depots.howTo.body')}
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('depots.list.title')}</h3>
			<ul class="list-disc list-inside pl-6">
				{#each depots as depot (depot.name)}
					<li>
						{depot.location}:
						<a
							href="https://google.com/maps/place/{depot.coordinates.join(',')}"
							target="_blank"
							class="anchor"
						>
							{depot.name}
						</a>, {depot.address}
					</li>
				{/each}
			</ul>
		</div>

		<DepotMap />
	</section>
</div>
