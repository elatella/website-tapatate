<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import depots from '$lib/depots';
	import backgroundImage from '$lib/images/bg-participate.jpg';
	import carrotsHands from '$lib/images/participate-carots.jpeg';
	import miniVeg from '$lib/images/participate-tomatoes-new.png';
	import smallVeg from '$lib/images/participate-brocoli.png';
	import largeVeg from '$lib/images/participate-pumpkin.png';
	import winterVeg from '$lib/images/participate-field.png';
	import miniFruit from '$lib/images/participate-bloom-new.png';
	import fruit from '$lib/images/participate-strawberries.png';

	interface Abo {
		id: string;
		image: string;
		flipped?: boolean;
	}

	const abosVeggie: Abo[] = [
		{
			id: 'miniVeg',
			image: miniVeg
		},
		{
			id: 'smallVeg',
			image: smallVeg
		},
		{
			id: 'largeVeg',
			image: largeVeg
		},
		{
			id: 'winterVeg',
			image: winterVeg
		}
	];

	const abosFruit: Abo[] = [
		{
			id: 'miniFruit',
			image: miniFruit
		},
		{
			id: 'fruit',
			image: fruit
		}
	];

	function flipVeggie(index: number) {
		abosVeggie[index].flipped = !abosVeggie[index].flipped;
	}

	function flipFruit(index: number) {
		abosFruit[index].flipped = !abosFruit[index].flipped;
	}
</script>

<Title title={$_('participate.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3>{$_('participate.harvest.title')}</h3>
			<p><em>{$_('participate.harvest.subtitle')}</em></p>
			<p>{$_('participate.harvest.body1')}</p>
		</div>

		<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each abosVeggie as abo, i (abo.id)}
				<button
					class="card card-hover"
					on:click={() => {
						flipVeggie(i);
					}}
				>
					{#if !abo.flipped}
						<img src={abo.image} alt={$_(`participate.harvest.${abo.id}.name`)} />
					{/if}
					<header class="card-header pb-4">
						<strong>{$_(`participate.harvest.${abo.id}.name`)}</strong>
					</header>
					{#if abo.flipped}
						<div class="p-3">
							<ul>
								<li>{$_(`participate.harvest.${abo.id}.people`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.price`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.parts`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.participate`)}</li>
							</ul>
							<p class="my-4">
								{$_('participate.harvest.infoVeg')}
								<a href="{base}/farm#veggies">{$_('participate.harvest.link')}</a>.
							</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>

		<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each abosFruit as abo, i (abo.id)}
				<button
					class="card card-hover"
					on:click={() => {
						flipFruit(i);
					}}
				>
					{#if !abo.flipped}
						<img src={abo.image} alt={$_(`participate.harvest.${abo.id}.name`)} />
					{/if}
					<header class="card-header pb-4">
						<strong>{$_(`participate.harvest.${abo.id}.name`)}</strong>
					</header>
					{#if abo.flipped}
						<div class="p-6">
							<ul>
								<li>{$_(`participate.harvest.${abo.id}.people`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.price`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.parts`)}</li>
								<li>{$_(`participate.harvest.${abo.id}.participate`)}</li>
							</ul>
							<p class="my-4">
								{$_('participate.harvest.infoFru')}
								<a href="/farm#fruits">{$_('participate.harvest.link')}</a>.
							</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>

		<div class="space-y-4">
			<h3>{$_('participate.harvest.subtitle2')}</h3>
			<p>{$_('participate.harvest.body2')}</p>
			<div
				class="w-full h-96 flex items-center justify-center bg-center bg-cover rounded-md"
				style="background-image: url({carrotsHands})"
			>
				<div class="text-6xl text-white text-center leading-normal">
					{$_('participate.harvest.imageSoli')}<br />{$_('participate.harvest.imageSoli2')}
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h3>{$_('participate.signUp.title')}</h3>
			<p><em>{$_('participate.signUp.subtitle')}</em></p>
			<a href="https://membres.tapatate.ch/new?locale={$locale}"
				><strong>{$_('participate.signUp.link1')}</strong></a
			>
			<p>{$_('participate.signUp.body1')}</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('participate.howTo.title')}</h3>

			<ol class="list-decimal list-inside space-y-4">
				<li>{$_('participate.howTo.list1')}</li>
				<li>{$_('participate.howTo.list2')}</li>
				<li>{$_('participate.howTo.list3')}</li>
				<li>
					{$_('participate.howTo.list4.body1')}
					{$_('participate.howTo.list4.link1')}
					{$_('participate.howTo.list4.body2')}
					<ul class="list-disc list-inside pl-6">
						{#each depots as depot (depot.name)}
							<li>
								{depot.location}:
								<a
									href="https://google.com/maps/place/{depot.coordinates.join(',')}"
									target="_blank"
								>
									{depot.name}
								</a>, {depot.address}
							</li>
						{/each}
					</ul>
					{$_('participate.howTo.list4.body3')}
					<a href="mailto:info@tapatate.ch">{$_('participate.howTo.list4.link2')}</a>
					{$_('participate.howTo.list4.body4')}
				</li>
				<li>
					{$_('participate.howTo.list5')}
					<a href="{base}/contact">{$_('participate.howTo.link1')}</a>
					{$_('participate.howTo.list5.2')}
				</li>
			</ol>
			<p>
				{$_('participate.howTo.body1')}
				<a href="{base}/docs/Statuten_Verein_{$locale}.pdf">
					{$_('participate.howTo.link2')}
				</a>
				{$_('participate.howTo.body2')}
				<a href="{base}/docs/Reglement_01_{$locale}.pdf">
					{$_('participate.howTo.link3')}
				</a>
				{$_('participate.howTo.body3')}
				<a href="{base}/docs/Hofreglement_TaPatate_{$locale}.pdf">
					{$_('participate.howTo.link4')}
				</a>
				{$_('participate.howTo.body4')}
				<a href="https://membres.tapatate.ch/new?locale={$locale}">
					{$_('participate.howTo.link5')}
				</a>!
			</p>

			<h3>{$_('participate.howTo.subtitle')}</h3>
			<p>{$_('participate.howTo.body6')}</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('participate.support.title')}</h3>
			<em>{$_('participate.support.subtitle')}</em>
			<p>{$_('participate.support.body')}</p>
			<ul class="list-disc list-inside">
				<li>
					{$_('participate.support.list1')}
					<a href="https://membres.tapatate.ch/new?locale={$locale}">
						{$_('participate.support.link1')}
					</a>
					{$_('participate.support.list1.2')}
				</li>
				<li>
					{$_('participate.support.list2')}
					<a href="mailto:info@tapatate.ch">
						{$_('participate.support.link2')}
					</a>
					{$_('participate.support.list2.2')}
				</li>
				<li>
					{$_('participate.support.list3')}
					<a href="mailto:info@tapatate.ch">
						{$_('participate.support.link2')}
					</a>
				</li>
				<li>
					{$_('participate.support.list4')}
					<a href="mailto:info@tapatate.ch">
						{$_('participate.support.link2')}
					</a>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h3>{$_('participate.otherOffers.title')}</h3>
			<em>{$_('participate.otherOffers.subtitle')}</em>
			<p>
				<strong>{$_('participate.otherOffers.offer1.title')}</strong>
				{$_('participate.otherOffers.offer1.body1')}
				<a href="mailto:v.birbaum@gmail.com">{$_('participate.otherOffers.offer1.link')}</a>
				{$_('participate.otherOffers.offer1.body2')}
			</p>
			<p>
				<strong>{$_('participate.otherOffers.offer2.title')}</strong>
				{$_('participate.otherOffers.offer2.body1')}
				<a href="http://www.sigasiga.ch/">{$_('participate.otherOffers.offer2.link1')}</a>
				{$_('participate.otherOffers.offer2.body2')}
				<a href="https://sigasiga.payrexx.com/de/?tid=b531fc1d"
					>{$_('participate.otherOffers.offer2.link2')}</a
				>.
			</p>
			<p>
				<strong>{$_('participate.otherOffers.offer3.title')}</strong>
				{$_('participate.otherOffers.offer3.body1')}
				<a href="mailto:v.birbaum@gmail.com">{$_('participate.otherOffers.offer3.link1')}</a>{$_(
					'participate.otherOffers.offer3.body2'
				)}
			</p>
		</div>
	</section>
</div>
