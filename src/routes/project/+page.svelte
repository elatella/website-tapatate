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

	const people = [
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

<div class="card p-4 space-y-4">
	<h3>{$_('project.whatIs.title')}</h3>
	<em>{$_('project.whatIs.subtitle')}</em>
	<p>
		{$_('project.whatIs.body1')}
		{$_('project.whatIs.body2')}
		<a href="https://membres.tapatate.ch/new?locale=de">{$_('project.whatIs.link1')} </a>
		{$_('project.whatIs.body3')}
		<a href="{base}/participate">{$_('project.whatIs.link2')}</a>
		{$_('project.whatIs.body4')}
	</p>
</div>

<div class="card p-4 space-y-4">
	<h3>{$_('project.association.title')}</h3>
	<p>
		{$_('project.association.body1')}
	</p>
	<ul class="list list-disc list-inside">
		<li>{$_('project.association.list1')}</li>
		<li>{$_('project.association.list2')}</li>
		<li>{$_('project.association.list3')}</li>
	</ul>
	<p>
		{$_('project.association.body2')}
		<a href="{base}/knowledge">{$_('project.association.link1')}</a>
		{$_('project.association.body3')}
	</p>
</div>

<div class="card p-4 space-y-4">
	<h3>{$_('project.name.title')}</h3>
	<img src={patates} alt={$_('project.name.potatoes')} />
	<p class="space-y-4">
		{$_('project.name.body1')}
		{$_('project.name.body2')}
		{$_('project.name.body3')}
	</p>
</div>

<div class="card p-4 space-y-4">
	<h3>{$_('project.board.title')}</h3>
	<img src={board} alt={$_('project.board.title')} />
	<p>
		{$_('project.board.body1')}
	</p>

	<div class="items space-y-4">
		{#each people as person}
			<div class="flex items-start">
				<Avatar src={person.image} width="w-64" height="h-64" rounded="rounded-full" />
				<div>
					<h5>{person.name}</h5>
					<p>{person.body1}</p>
					<p><strong><em>{person.quote}</em></strong></p>
					<p>{person.body2}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
