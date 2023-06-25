<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import depots from '$lib/depots';
	import backgroundImage from '$lib/images/bg-subscriptions.jpg';
	import carrotsHands from '$lib/images/subscriptions-carots.jpeg';
	import miniVeg from '$lib/images/subscriptions-tomatoes-new.png';

	interface Recipe {
		id: string;
		image: string;
		ingredients: string;
		description: string;
	}

	const recipes: Recipe[] = [
		{
			id: 'miniVeg',
			image: miniVeg,
			ingredients: ,
			description:
		}
	];
</script>

<Title title={$_('recipes.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3>{$_('subscriptions.harvest.title')}</h3>
			<p><em>{$_('subscriptions.harvest.subtitle')}</em></p>
		</div>

		<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each recipes as recipe, i (recipe.id)}
				<button
					class="card card-hover"
					on:click={() => {
						flipVeggie(i);
					}}
				>
					{#if !abo.flipped}
						<img src={abo.image} alt={$_(`subscriptions.harvest.${abo.id}.name`)} />
					{/if}
					<header class="card-header pb-4">
						<strong>{$_(`subscriptions.harvest.${abo.id}.name`)}</strong>
					</header>
					{#if abo.flipped}
						<div class="p-3">
							<ul>
								<li>{$_(`subscriptions.harvest.${abo.id}.people`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.price`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.parts`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.subscriptions`)}</li>
							</ul>
							<p class="my-4">
								{$_('subscriptions.harvest.infoVeg')}
								<a href="{base}/farm#veggies">{$_('subscriptions.harvest.link')}</a>.
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
						<img src={abo.image} alt={$_(`subscriptions.harvest.${abo.id}.name`)} />
					{/if}
					<header class="card-header pb-4">
						<strong>{$_(`subscriptions.harvest.${abo.id}.name`)}</strong>
					</header>
					{#if abo.flipped}
						<div class="p-6">
							<ul>
								<li>{$_(`subscriptions.harvest.${abo.id}.people`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.price`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.parts`)}</li>
								<li>{$_(`subscriptions.harvest.${abo.id}.subscriptions`)}</li>
							</ul>
							<p class="my-4">
								{$_('subscriptions.harvest.infoFru')}
								<a href="/farm#fruits">{$_('subscriptions.harvest.link')}</a>.
							</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>

		<div class="space-y-4">
			<h3>{$_('subscriptions.harvest.subtitle2')}</h3>
			<p>{$_('subscriptions.harvest.body2')}</p>
			<div
				class="w-full h-96 flex items-center justify-center bg-center bg-cover rounded-md"
				style="background-image: url({carrotsHands})"
			>
				<div class="text-6xl text-white text-center leading-normal">
					{$_('subscriptions.harvest.imageSoli')}<br />{$_('subscriptions.harvest.imageSoli2')}
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h3>{$_('subscriptions.signUp.title')}</h3>
			<p><em>{$_('subscriptions.signUp.subtitle')}</em></p>
			<a href="https://membres.tapatate.ch/new?locale={$locale}"
				><strong>{$_('subscriptions.signUp.link1')}</strong></a
			>
			<p>{$_('subscriptions.signUp.body1')}</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('subscriptions.howTo.title')}</h3>

			<ol class="list-decimal list-inside space-y-4">
				<li>{$_('subscriptions.howTo.list1')}</li>
				<li>{$_('subscriptions.howTo.list2')}</li>
				<li>{$_('subscriptions.howTo.list3')}</li>
				<li>
					{$_('subscriptions.howTo.list4.body1')}
					{$_('subscriptions.howTo.list4.link1')}
					{$_('subscriptions.howTo.list4.body2')}
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
					{$_('subscriptions.howTo.list4.body3')}
					<a href="mailto:info@tapatate.ch">{$_('subscriptions.howTo.list4.link2')}</a>
					{$_('subscriptions.howTo.list4.body4')}
				</li>
				<li>
					{$_('subscriptions.howTo.list5')}
					<a href="{base}/contact">{$_('subscriptions.howTo.link1')}</a>
					{$_('subscriptions.howTo.list5.2')}
				</li>
			</ol>
			<p>
				{$_('subscriptions.howTo.body1')}
				<a href="{base}/docs/Statuten_Verein_{$locale}.pdf">
					{$_('subscriptions.howTo.link2')}
				</a>
				{$_('subscriptions.howTo.body2')}
				<a href="{base}/docs/Reglement_01_{$locale}.pdf">
					{$_('subscriptions.howTo.link3')}
				</a>
				{$_('subscriptions.howTo.body3')}
				<a href="{base}/docs/Hofreglement_TaPatate_{$locale}.pdf">
					{$_('subscriptions.howTo.link4')}
				</a>
				{$_('subscriptions.howTo.body4')}
				<a href="https://membres.tapatate.ch/new?locale={$locale}">
					{$_('subscriptions.howTo.link5')}
				</a>!
			</p>

			<h3>{$_('subscriptions.howTo.subtitle')}</h3>
			<p>{$_('subscriptions.howTo.body6')}</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('subscriptions.support.title')}</h3>
			<em>{$_('subscriptions.support.subtitle')}</em>
			<p>{$_('subscriptions.support.body')}</p>
			<ul class="list-disc list-inside">
				<li>
					{$_('subscriptions.support.list1')}
					<a href="https://membres.tapatate.ch/new?locale={$locale}">
						{$_('subscriptions.support.link1')}
					</a>
					{$_('subscriptions.support.list1.2')}
				</li>
				<li>
					{$_('subscriptions.support.list2')}
					<a href="mailto:info@tapatate.ch">
						{$_('subscriptions.support.link2')}
					</a>
					{$_('subscriptions.support.list2.2')}
				</li>
				<li>
					{$_('subscriptions.support.list3')}
					<a href="mailto:info@tapatate.ch">
						{$_('subscriptions.support.link2')}
					</a>
				</li>
				<li>
					{$_('subscriptions.support.list4')}
					<a href="mailto:info@tapatate.ch">
						{$_('subscriptions.support.link2')}
					</a>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h3>{$_('subscriptions.otherOffers.title')}</h3>
			<em>{$_('subscriptions.otherOffers.subtitle')}</em>
			<p>
				<strong>{$_('subscriptions.otherOffers.offer1.title')}</strong>
				{$_('subscriptions.otherOffers.offer1.body1')}
				<a href="mailto:v.birbaum@gmail.com">{$_('subscriptions.otherOffers.offer1.link')}</a>
				{$_('subscriptions.otherOffers.offer1.body2')}
			</p>
			<p>
				<strong>{$_('subscriptions.otherOffers.offer2.title')}</strong>
				{$_('subscriptions.otherOffers.offer2.body1')}
				<a href="http://www.sigasiga.ch/">{$_('subscriptions.otherOffers.offer2.link1')}</a>
				{$_('subscriptions.otherOffers.offer2.body2')}
				<a href="https://sigasiga.payrexx.com/de/?tid=b531fc1d"
					>{$_('subscriptions.otherOffers.offer2.link2')}</a
				>.
			</p>
			<p>
				<strong>{$_('subscriptions.otherOffers.offer3.title')}</strong>
				{$_('subscriptions.otherOffers.offer3.body1')}
				<a href="mailto:v.birbaum@gmail.com">{$_('subscriptions.otherOffers.offer3.link1')}</a>{$_(
					'subscriptions.otherOffers.offer3.body2'
				)}
			</p>
		</div>
	</section>
</div>
