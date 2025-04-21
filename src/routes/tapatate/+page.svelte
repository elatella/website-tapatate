<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-tapatate.jpg';
	import patates from '$lib/images/tapatate-patates.jpg';
	import board from '$lib/images/tapatate-board.png';
	import armin from '$lib/images/tapatate-armin.jpg';
	import neal from '$lib/images/tapatate-neal.jpg';
	import luca from '$lib/images/tapatate-luca.jpg';
	import nadina from '$lib/images/tapatate-nadina.jpg';
	import valentin from '$lib/images/tapatate-valentin.jpg';
	import martina from '$lib/images/tapatate-martina.png';
	import melina from '$lib/images/tapatate-melina.jpg';
	import simon from '$lib/images/tapatate-simon.jpg';
	import noemie from '$lib/images/tapatate-noemie.jpg';
	import reworkFR from '$lib/images/website_rework_FR.jpg';
	import reworkDE from '$lib/images/website_rework.jpg';

	interface Person {
		id: string;
		name: string;
		image: string;
	}

	const people: Person[] = [
		{
			id: 'armin',
			name: 'Armin Komposch',
			image: armin
		},
		{
			id: 'luca',
			name: 'Luca Helfenstein',
			image: luca
		},
		{
			id: 'martina',
			name: 'Martina Sommer',
			image: martina
		},
		{
			id: 'melina',
			name: 'Melina Jörg',
			image: melina
		},
		{
			id: 'nadina',
			name: 'Nadina Sommer',
			image: nadina
		},
		{
			id: 'neal',
			name: 'Neal Dill',
			image: neal
		},
		{
			id: 'noemie',
			name: 'Noémie Pichon',
			image: noemie
		},
		{
			id: 'simon',
			name: 'Simon Mägli',
			image: simon
		},
		{
			id: 'valentin',
			name: 'Valentin Birbaum',
			image: valentin
		}
	];
</script>

<Title title={$_('tapatate.title')} {backgroundImage} />

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<img src={$locale && $locale.includes('fr') ? reworkFR : reworkDE} alt={$_('news.news.rework')} />
</div>

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
></div>

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('tapatate.whatIs.title')}</h3>
			<p><em>{$_('tapatate.whatIs.subtitle')}</em></p>
			<p>{$_('tapatate.whatIs.body1')}</p>
			<p>
				{$_('tapatate.whatIs.body2')}
				<a href="https://membres.tapatate.ch/new?locale={$locale}" class="anchor"
					>{$_('tapatate.whatIs.link1')}</a
				>
				{$_('tapatate.whatIs.body3')}
				<a href="{base}/subscriptions" class="anchor">{$_('tapatate.whatIs.link2')}</a>.
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('tapatate.association.title')}</h3>
			<p>{$_('tapatate.association.body1')}</p>
			<ul class="list-disc list-inside pl-6">
				<li>{$_('tapatate.association.list1')}</li>
				<li>{$_('tapatate.association.list2')}</li>
				<li>{$_('tapatate.association.list3')}</li>
			</ul>
			<p>
				{$_('tapatate.association.body2')}
				<a href="{base}/knowledge" class="anchor">{$_('tapatate.association.link1')}</a>.
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('tapatate.name.title')}</h3>
			<img src={patates} alt={$_('tapatate.name.potatoes')} class="w-full rounded-md" />
			<p class="space-y-4">
				{$_('tapatate.name.body1')}<br />
				{$_('tapatate.name.body2')}<br />
				{$_('tapatate.name.body3')}
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('tapatate.board.title')}</h3>
			<img src={board} alt={$_('tapatate.board.title')} class="w-full rounded-md" />
			<p class="pb-16">{$_('tapatate.board.body1')}</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each people as person (person.id)}
					<div class="card p-6 flex flex-col items-center space-y-4">
						<Avatar src={person.image} width="w-48" height="h-48" rounded="rounded-full" />
						<h5 class="h5">{person.name}</h5>
						<p><strong><em>"{$_(`tapatate.board.${person.id}.quote`)}"</em></strong></p>
						<p>{$_(`tapatate.board.${person.id}.association`)}</p>
					</div>
				{/each}
			</div>
			<p class="pt-16">{$_('tapatate.board.body2')}</p>
		</div>
	</section>
</div>
