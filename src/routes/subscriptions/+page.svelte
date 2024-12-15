<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-subscriptions.jpg';
	import carrotsHands from '$lib/images/subscriptions/carots.jpeg';
	import miniVeg from '$lib/images/subscriptions/tomatoes-new.png';
	import smallVeg from '$lib/images/subscriptions/brocoli.png';
	import largeVeg from '$lib/images/subscriptions/pumpkin.png';
	import winterVeg from '$lib/images/subscriptions/field.png';
	import miniFruit from '$lib/images/subscriptions/bloom-new.png';
	import fruit from '$lib/images/subscriptions/strawberries.png';
	import Abo from './Abo.svelte';

	interface Subscription {
		id: string;
		image: string;
		hasTrial: boolean;
	}

	const abosVeggie: Subscription[] = [
		{
			id: 'miniVeg',
			image: miniVeg,
			hasTrial: true
		},
		{
			id: 'smallVeg',
			image: smallVeg,
			hasTrial: true
		},
		{
			id: 'largeVeg',
			image: largeVeg,
			hasTrial: true
		},
		{
			id: 'winterVeg',
			image: winterVeg,
			hasTrial: true
		}
	];

	const abosFruit: Subscription[] = [
		{
			id: 'miniFruit',
			image: miniFruit,
			hasTrial: false
		},
		{
			id: 'fruit',
			image: fruit,
			hasTrial: true
		}
	];
</script>

<Title title={$_('subscriptions.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('subscriptions.signUp.title')}</h3>
			<p><em>{$_('subscriptions.signUp.subtitle')}</em></p>
			<a href="https://membres.tapatate.ch/new?locale={$locale}" class="anchor"
				><strong>{$_('subscriptions.signUp.link1')}</strong></a
			>
			<p>{$_('subscriptions.signUp.body1')}</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('subscriptions.harvest.title')}</h3>
			<p><em>{$_('subscriptions.harvest.subtitle')}</em></p>
			<p>{$_('subscriptions.harvest.body1')}</p>
		</div>

		<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each abosVeggie as abo (abo.id)}
				<Abo id={abo.id} image={abo.image} hasTrial={abo.hasTrial} />
			{/each}
		</div>

		<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each abosFruit as abo (abo.id)}
				<Abo id={abo.id} image={abo.image} hasTrial={abo.hasTrial} />
			{/each}
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('subscriptions.harvest.subtitle2')}</h3>
			<p>{$_('subscriptions.harvest.body2')}</p>
			<p>{$_('subscriptions.harvest.body3')}</p>
			<p>{$_('subscriptions.harvest.body4')}</p>
			<p>
				{$_('subscriptions.harvest.body5')}
				<a href="mailto:info@tapatate.ch" class="anchor">{$_('subscriptions.harvest.link1')}</a>
				{$_('subscriptions.harvest.body6')}
			</p>
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
			<h3 class="h3">{$_('subscriptions.howTo.title')}</h3>

			<ol class="list-decimal list-inside space-y-4">
				<li>{$_('subscriptions.howTo.list1')}</li>
				<li>{$_('subscriptions.howTo.list2')}</li>
				<li>{$_('subscriptions.howTo.list3')}</li>
				<li>
					{$_('subscriptions.howTo.list4.body1')}
					<a href="{base}/depots" class="anchor">{$_('subscriptions.howTo.list4.link1')}</a>
					{$_('subscriptions.howTo.list4.body2')}
				</li>
				<li>{$_('subscriptions.howTo.list5')}</li>
			</ol>
			<p>
				{$_('subscriptions.howTo.body1')}
				<a href="{base}/docs/Statuten_Verein_{$locale}.pdf" class="anchor">
					{$_('subscriptions.howTo.link2')}
				</a>
				{$_('subscriptions.howTo.body2')}
				<a href="{base}/docs/Reglement_01_{$locale}.pdf" class="anchor">
					{$_('subscriptions.howTo.link3')}
				</a>
				{$_('subscriptions.howTo.body3')}
				<a href="{base}/docs/Hofreglement_TaPatate_{$locale}.pdf" class="anchor">
					{$_('subscriptions.howTo.link4')}
				</a>
				{$_('subscriptions.howTo.body4')}
			</p>
			<p>
				{$_('subscriptions.howTo.body5')}
				<a href="https://membres.tapatate.ch/new?locale={$locale}" class="anchor">
					{$_('subscriptions.howTo.link5')}
				</a>!
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('subscriptions.support.title')}</h3>
			<em>{$_('subscriptions.support.subtitle')}</em>
			<ul class="list-disc list-inside">
				<li>{$_('subscriptions.support.list1')}</li>
				<li>
					{$_('subscriptions.support.list2')}
					<a href="mailto:info@tapatate.ch" class="anchor">
						{$_('subscriptions.support.link2')}
					</a>
					{$_('subscriptions.support.list2.2')}
				</li>
				<li>
					{$_('subscriptions.support.list3')}
					<a href="mailto:info@tapatate.ch" class="anchor">
						{$_('subscriptions.support.link2')}
					</a>
				</li>
				<li>
					{$_('subscriptions.support.list4')}
					<a href="mailto:info@tapatate.ch" class="anchor">
						{$_('subscriptions.support.link2')}
					</a>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('subscriptions.cancellation.title')}</h3>
			<p>{$_('subscriptions.cancellation.body1')}</p>
			<b>{$_('subscriptions.cancellation.body2')}</b>
			<p>{$_('subscriptions.cancellation.body3')}</p>
			<p>
				{$_('subscriptions.cancellation.body4')}
				<a href="https://www.solawi.ch/" class="anchor">{$_('subscriptions.cancellation.link1')}</a>
				{$_('subscriptions.cancellation.body5')}
			</p>
		</div>
	</section>
</div>
