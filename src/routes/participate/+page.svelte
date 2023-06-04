<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
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
						<li>
							{$_('participate.howTo.list4.depot1.body1')}
							<a
								href="https://www.google.ch/maps/place/46%C2%B057'04.2%22N+7%C2%B025'54.5%22E/@46.9511719,7.4312458,263m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x478e39bcd7ad33bd:0x193a599762a92759!2sDonnerb%C3%BChlweg+31,+3012+Bern!3b1!8m2!3d46.9511275!4d7.431736!3m5!1s0x0:0x0!7e2!8m2!3d46.9511713!4d7.4317933"
								>{$_('participate.howTo.list4.depot1.link1')}</a
							>
							{$_('participate.howTo.list4.depot1.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot2.body1')}
							<a
								href="https://tapatate.ch/de/http%20%20%20%20%20%20s://www.google.ch/maps/place/46%C2%B057'16.6%22N+7%C2%B027'08.5%22E/@46.9546079,7.4518108,263m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x478e39e9a919cc47:0x920ba59b6583f3d!2sRestaurant+L%C3%B6scher!8m2!3d46.9545812!4d7.4521503!3m5!1s0x0:0x0!7e2!8m2!3d46.9546065!4d7.4523577"
								>{$_('participate.howTo.list4.depot2.link1')}</a
							>
							{$_('participate.howTo.list4.depot2.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot3.body1')}
							<a
								href="https://www.google.ch/maps/place/Quartier-+und+Bioladen+Fischerm%C3%A4tteli/@46.9409495,7.4175303,1052m/data=!3m1!1e3!4m12!1m6!3m5!1s0x478e39a97562423f:0xab23ea580ecca812!2sQuartier-+und+Bioladen+Fischerm%C3%A4tteli!8m2!3d46.9409459!4d7.419719!3m4!1s0x478e39a97562423f:0xab23ea580ecca812!8m2!3d46.9409459!4d7.419719"
								>{$_('participate.howTo.list4.depot3.link1')}</a
							>
							{$_('participate.howTo.list4.depot3.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot4.body1')}
							<a
								href="https://www.google.ch/maps/place/Q-Laden/@46.9583422,7.4443819,17z/data=!3m1!4b1!4m5!3m4!1s0x478e39ec970500ed:0xc04e9c2835daa5a9!8m2!3d46.9583386!4d7.4465706"
								>{$_('participate.howTo.list4.depot4.link1')}</a
							>
							{$_('participate.howTo.list4.depot4.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot5.body1')}
							<a
								href="https://www.google.ch/maps/place/Spinnereiweg+4,+3004+Bern/@46.9699052,7.4400168,17z/data=!3m1!4b1!4m5!3m4!1s0x478e398bd4fe3fd9:0x7858a845b6cefa92!8m2!3d46.9699052!4d7.4422055"
								>{$_('participate.howTo.list4.depot5.link1')}</a
							>
							{$_('participate.howTo.list4.depot5.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot6.body1')}
							<a
								href="https://www.google.ch/maps/place/Laden+im+Murifeld/@46.9410508,7.4683665,17z/data=!3m1!4b1!4m5!3m4!1s0x478e377b4e700001:0x10172f1b53e4c1c2!8m2!3d46.9411038!4d7.4704927"
								>{$_('participate.howTo.list4.depot6.link1')}</a
							>
							{$_('participate.howTo.list4.depot6.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot7.body1')}
							<a
								href="https://www.google.ch/maps/place/46%C2%B047'51.3%22N+7%C2%B008'48.6%22E/@46.7975892,7.1455538,622m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x478e692ac061d6c1:0x739a09fb999f5d9a!2sBluefactory+Fribourg-Freiburg+SA!8m2!3d46.797698!4d7.1475588!3m5!1s0x0:0x0!7e2!8m2!3d46.797587!4d7.1468441"
								>{$_('participate.howTo.list4.depot7.link1')}</a
							>
							{$_('participate.howTo.list4.depot7.body2')}
						</li>
						<li>
							{$_('participate.howTo.list4.depot8.body1')}
							<a
								href="https://www.google.ch/maps/place/46%C2%B055'48.3%22N+7%C2%B013'18.0%22E/@46.9300953,7.2209005,374m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x478e14e047d2acf9:0x69ff3ca2b3de396d!2s3206+Wallenbuch!3b1!8m2!3d46.929725!4d7.224722!3m5!1s0x0:0x0!7e2!8m2!3d46.9300941!4d7.2216793"
								>{$_('participate.howTo.list4.depot8.link1')}</a
							>
							{$_('participate.howTo.list4.depot8.body2')}
						</li>
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
