<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import depots from '$lib/depots';
	import Title from '$lib/Title.svelte';
	import DepotMap from '$lib/DepotMap.svelte';
	import backgroundImage from '$lib/images/bg-depots.jpg';
	import reworkFR from '$lib/images/website_rework_FR.jpg';
	import reworkDE from '$lib/images/website_rework.jpg';
</script>

<Title title={$_('depots.title')} {backgroundImage} />

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<img src={$locale && $locale.includes('fr') ? reworkFR : reworkDE} alt={$_('news.news.rework')} />
</div>

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
></div>

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
