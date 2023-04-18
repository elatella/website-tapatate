<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-project.jpg';
	import patates from '$lib/images/project-patates.jpg';
	import board from '$lib/images/project-board.jpg';
	import armin from '$lib/images/project-armin.jpg';
	import athina from '$lib/images/project-athina.jpg';
	import celina from '$lib/images/project-celina.jpg';
	import luna from '$lib/images/project-luna.jpg';
	import tamara from '$lib/images/project-tamara.jpg';
	import tobias from '$lib/images/project-tobias.jpg';
	import valentin from '$lib/images/project-valentin.jpg';

	interface Person {
		name: string;
		image: string;
		body1: string;
		quote: string;
		body2: string;
	}

	const people: Person[] = [
		{
			name: 'Armin Komposch',
			image: armin,
			body1: $_('project.board.armin1'),
			quote: $_('project.board.armin2'),
			body2: $_('project.board.armin3')
		},
		{
			name: 'Athina Dill',
			image: athina,
			body1: $_('project.board.athina1'),
			quote: $_('project.board.athina2'),
			body2: $_('project.board.athina3')
		},

		{
			name: 'Celina Vonwyl',
			image: celina,
			body1: $_('project.board.celina1'),
			quote: $_('project.board.celina2'),
			body2: $_('project.board.celina3')
		},
		{
			name: 'Luna Satori',
			image: luna,
			body1: $_('project.board.luna1'),
			quote: $_('project.board.luna2'),
			body2: $_('project.board.luna3')
		},
		{
			name: 'Tamara Köke',
			image: tamara,
			body1: $_('project.board.tamara1'),
			quote: $_('project.board.tamara2'),
			body2: $_('project.board.tamara3')
		},
		{
			name: 'Tobias Maiser',
			image: tobias,
			body1: $_('project.board.tobias1'),
			quote: $_('project.board.tobias2'),
			body2: $_('project.board.tobias3')
		},
		{
			name: 'Valentin Birbaum',
			image: valentin,
			body1: $_('project.board.valentin1'),
			quote: $_('project.board.valentin2'),
			body2: $_('project.board.valentin3')
		}
	];
</script>

<Title title={$_('project.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3>{$_('project.whatIs.title')}</h3>
			<p><em>{$_('project.whatIs.subtitle')}</em></p>
			<p>{$_('project.whatIs.body1')}</p>
			<p>
				{$_('project.whatIs.body2')}
				<a href="https://membres.tapatate.ch/new?locale=de">{$_('project.whatIs.link1')} </a>
				{$_('project.whatIs.body3')}
				<a href="{base}/participate">{$_('project.whatIs.link2')}</a>.
			</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('project.association.title')}</h3>
			<p>{$_('project.association.body1')}</p>
			<ul class="list-disc list-inside pl-6">
				<li>{$_('project.association.list1')}</li>
				<li>{$_('project.association.list2')}</li>
				<li>{$_('project.association.list3')}</li>
			</ul>
			<p>
				{$_('project.association.body2')}
				<a href="{base}/knowledge">{$_('project.association.link1')}</a>.
			</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('project.name.title')}</h3>
			<img src={patates} alt={$_('project.name.potatoes')} class="w-full rounded-md" />
			<p class="space-y-4">
				{$_('project.name.body1')}
				{$_('project.name.body2')}
				{$_('project.name.body3')}
			</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('project.board.title')}</h3>
			<img src={board} alt={$_('project.board.title')} class="w-full rounded-md" />
			<p class="pb-16">{$_('project.board.body1')}</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each people as person}
					<div class="card p-6 flex flex-col items-center space-y-4">
						<Avatar src={person.image} width="w-48" height="h-48" rounded="rounded-full" />
						<h5>{person.name}</h5>
						<p>{person.body1}</p>
						<p><strong><em>{person.quote}</em></strong></p>
						<p>{person.body2}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
