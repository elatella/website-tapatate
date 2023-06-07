<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import depots from '$lib/depots';
	import DepotMap from '$lib/DepotMap.svelte';
</script>

<div class="w-full p-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h1>{$_('depots.title')}</h1>
			<p><em>{$_('depots.subtitle')}</em></p>
		</div>

		<div class="space-y-4">
			<h3>{$_('depots.howTo.title')}</h3>
			<p>
				<a href="{base}/docs/Depots_{$locale}.pdf">{$_('depots.howTo.link')}</a>
				{$_('depots.howTo.body')}
			</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('depots.list.title')}</h3>
			<ul class="list-disc list-inside pl-6">
				{#each depots as depot (depot.name)}
					<li>
						{depot.location}:
						<a href="https://google.com/maps/place/{depot.coordinates.join(',')}" target="_blank">
							{depot.name}
						</a>, {depot.address}
					</li>
				{/each}
			</ul>
		</div>

		<DepotMap />
	</section>
</div>
