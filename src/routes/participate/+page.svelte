<script lang="ts">
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-participate.jpg';
	import miniV from '$lib/images/participate-tomatoes-new.png';
	import smallV from '$lib/images/participate-brocoli.png';
	import bigV from '$lib/images/participate-pumpkin.png';
	import winterV from '$lib/images/participate-field.png';
	import miniF from '$lib/images/participate-bloom-new.png';
	import fruit from '$lib/images/participate-strawberries.png';
	import { filter, XPro } from '@skeletonlabs/skeleton';
	import soli from '$lib/images/participate-carots.jpeg';
	import { _ } from 'svelte-i18n';

	const abosVeggie = [
		{
			name: $_('participate.harvest.nameMiniVeg'),
			image: miniV,
			list1: $_('participate.harvest.1p'),
			list2: $_('participate.harvest.792'),
			list3: $_('participate.harvest.part1'),
			list4: $_('participate.harvest.help3'),
			infos: $_('participate.harvest.infoVeg'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		},
		{
			name: $_('participate.harvest.nameSamllVeg'),
			image: smallV,
			list1: $_('participate.harvest.12p'),
			list2: $_('participate.harvest.1254'),
			list3: $_('participate.harvest.part2'),
			list4: $_('participate.harvest.help6'),
			infos: $_('participate.harvest.infoVeg'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		},
		{
			name: $_('participate.harvest.nameBigVeg'),
			image: bigV,
			list1: $_('participate.harvest.24p'),
			list2: $_('participate.harvest.2508'),
			list3: $_('participate.harvest.part4'),
			list4: $_('participate.harvest.help12'),
			infos: $_('participate.harvest.infoVeg'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		},
		{
			name: $_('participate.harvest.nameWinterVeg'),
			image: winterV,
			list1: $_('participate.harvest.12p'),
			list2: $_('participate.harvest.500'),
			list3: $_('participate.harvest.part1'),
			list4: $_('participate.harvest.help2'),
			infos: $_('participate.harvest.infoVeg'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		}
	];

	const abosFruit = [
		{
			name: $_('participate.harvest.nameMiniFru'),
			image: miniF,
			list1: $_('participate.harvest.0p'),
			list2: $_('participate.harvest.part0'),
			list3: $_('participate.harvest.250'),
			list4: $_('participate.harvest.help0'),
			infos: $_('participate.harvest.infoFru'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		},
		{
			name: $_('participate.harvest.nameFru'),
			image: fruit,
			list1: $_('participate.harvest.2p'),
			list2: $_('participate.harvest.500'),
			list3: $_('participate.harvest.part1'),
			list4: $_('participate.harvest.help2'),
			infos: $_('participate.harvest.infoFru'),
			linkVeg: $_('participate.harvest.link'),
			infos2: $_('participate.harvest.dot')
		}
	];
</script>

<Title title={$_('participate.title')} {backgroundImage} />

<div class="card p-4 space-y-4">
	<h3>{$_('participate.harvest.title')}</h3>
	<em>{$_('participate.harvest.subtitle')}</em>
	<p>
		{$_('participate.harvest.body1')}
	</p>
</div>

<div class="space-y-4">
	<div class="items card p-4">
		{#each abosVeggie as abo}
			<span
				class="chip {abosVeggie[abo] ? 'variant-filled' : 'variant-soft'}"
				on:click={() => {
					filter(abo);
				}}
				on:keypress
			>
				{#if abosVeggie[abo]}<span>(icon)</span>{/if}
				<span class="capitalize">{abo}</span>
			</span>
		{/each}
	</div>
	<div class="items card p-4">
		{#each abosFruit as abo}
			<span
				class="chip {abosFruit[abo] ? 'variant-filled' : 'variant-soft'}"
				on:click={() => {
					filter(abo);
				}}
				on:keypress
			>
				{#if abosFruit[abo]}<span>(icon)</span>{/if}
				<span class="capitalize">{abo}</span>
			</span>
		{/each}
	</div>

	<h5>{$_('participate.harvest.subtitle2')}</h5>
	<p>{$_('participate.harvest.body2')}</p>
	<img src="soli" alt="hands with carrots" use:filter={'#XPro'} />
</div>
<div class="card p-4 space-y-4">
	<h3>{$_('participate.signUp.title')}</h3>
	<em>{$_('participate.signUp.subtitle')}</em>
	<strong> {$_('participate.signUp.link1')}</strong>
	<p>
		{$_('participate.signUp.body1')}
	</p>
</div>

<div class="card p-4 space-y-4">
	<h3>{$_('participate.howTo.title')}</h3>

	<ol class="list-decimal list-inside">
		<li>{$_('participate.howTo.list1')}</li>
		<li>{$_('participate.howTo.list2')}</li>
		<li>{$_('participate.howTo.list3')}</li>
		<li>
			{$_('participate.howTo.list4.body1')}
			{$_('participate.howTo.list4.link1')}
			{$_('participate.howTo.list4.body2')}
			<ul class="list-disc list-inside space-y-1">
				{$_('participate.howTo.list4.depot1.body1')}
				<a
					href="https://www.google.ch/maps/place/46%C2%B057'04.2%22N+7%C2%B025'54.5%22E/@46.9511719,7.4312458,263m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x478e39bcd7ad33bd:0x193a599762a92759!2sDonnerb%C3%BChlweg+31,+3012+Bern!3b1!8m2!3d46.9511275!4d7.431736!3m5!1s0x0:0x0!7e2!8m2!3d46.9511713!4d7.4317933"
					>{$_('participate.howTo.list4.depot1.link1')}</a
				>
				{$_('participate.howTo.list4.depot1.body2')}
				{$_('participate.howTo.list4.depot2.body1')}
				<a
					href="https://tapatate.ch/de/http%20%20%20%20%20%20s://www.google.ch/maps/place/46%C2%B057'16.6%22N+7%C2%B027'08.5%22E/@46.9546079,7.4518108,263m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x478e39e9a919cc47:0x920ba59b6583f3d!2sRestaurant+L%C3%B6scher!8m2!3d46.9545812!4d7.4521503!3m5!1s0x0:0x0!7e2!8m2!3d46.9546065!4d7.4523577"
					>{$_('participate.howTo.list4.depot2.link1')}</a
				>
				{$_('participate.howTo.list4.depot2.body2')}
				{$_('participate.howTo.list4.depot3.body1')}
				<a
					href="https://www.google.ch/maps/place/Quartier-+und+Bioladen+Fischerm%C3%A4tteli/@46.9409495,7.4175303,1052m/data=!3m1!1e3!4m12!1m6!3m5!1s0x478e39a97562423f:0xab23ea580ecca812!2sQuartier-+und+Bioladen+Fischerm%C3%A4tteli!8m2!3d46.9409459!4d7.419719!3m4!1s0x478e39a97562423f:0xab23ea580ecca812!8m2!3d46.9409459!4d7.419719"
					>{$_('participate.howTo.list4.depot3.link1')}</a
				>
				{$_('participate.howTo.list4.depot3.body2')}
				{$_('participate.howTo.list4.depot4.body1')}
				<a
					href="https://www.google.ch/maps/place/Q-Laden/@46.9583422,7.4443819,17z/data=!3m1!4b1!4m5!3m4!1s0x478e39ec970500ed:0xc04e9c2835daa5a9!8m2!3d46.9583386!4d7.4465706"
					>{$_('participate.howTo.list4.depot4.link1')}</a
				>
				{$_('participate.howTo.list4.depot4.body2')}
				{$_('participate.howTo.list4.depot5.body1')}
				<a
					href="https://www.google.ch/maps/place/Spinnereiweg+4,+3004+Bern/@46.9699052,7.4400168,17z/data=!3m1!4b1!4m5!3m4!1s0x478e398bd4fe3fd9:0x7858a845b6cefa92!8m2!3d46.9699052!4d7.4422055"
					>{$_('participate.howTo.list4.depot5.link1')}</a
				>
				{$_('participate.howTo.list4.depot5.body2')}
				{$_('participate.howTo.list4.depot6.body1')}
				<a
					href="https://www.google.ch/maps/place/Laden+im+Murifeld/@46.9410508,7.4683665,17z/data=!3m1!4b1!4m5!3m4!1s0x478e377b4e700001:0x10172f1b53e4c1c2!8m2!3d46.9411038!4d7.4704927"
					>{$_('participate.howTo.list4.depot6.link1')}</a
				>
				{$_('participate.howTo.list4.depot6.body2')}
				{$_('participate.howTo.list4.depot7.body1')}
				<a
					href="https://www.google.ch/maps/place/46%C2%B047'51.3%22N+7%C2%B008'48.6%22E/@46.7975892,7.1455538,622m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x478e692ac061d6c1:0x739a09fb999f5d9a!2sBluefactory+Fribourg-Freiburg+SA!8m2!3d46.797698!4d7.1475588!3m5!1s0x0:0x0!7e2!8m2!3d46.797587!4d7.1468441"
					>{$_('participate.howTo.list4.depot7.link1')}</a
				>
				{$_('participate.howTo.list4.depot7.body2')}
				{$_('participate.howTo.list4.depot8.body1')}
				<a
					href="https://www.google.ch/maps/place/46%C2%B055'48.3%22N+7%C2%B013'18.0%22E/@46.9300953,7.2209005,374m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x478e14e047d2acf9:0x69ff3ca2b3de396d!2s3206+Wallenbuch!3b1!8m2!3d46.929725!4d7.224722!3m5!1s0x0:0x0!7e2!8m2!3d46.9300941!4d7.2216793"
					>{$_('participate.howTo.list4.depot8.link1')}</a
				>
				{$_('participate.howTo.list4.depot8.body2')}
			</ul>
			{$_('participate.howTo.list4.body3')}
			<a href="info@tapatate.ch">{$_('participate.howTo.list4.link2')}</a>
			{$_('participate.howTo.list4.body4')}
		</li>
		<li>
			{$_('participate.howTo.list5')}
			<a href="/contact">{$_('participate.howTo.link1')}</a>
			{$_('participate.howTo.list5.2')}
		</li>
	</ol>
	<p>
		{$_('participate.howTo.body1')}
		<a href="">{$_('participate.association.link2')}</a>
		{$_('project.association.body2')}
		<a href="">{$_('participate.association.link3')}</a>
		{$_('project.association.body3')}
		<a href="">{$_('participate.association.link4')}</a>
		{$_('project.association.body4')}
		<a href="">{$_('participate.association.link5')}</a>
		{$_('project.association.body5')}
	</p>
</div>

<div class="card p-4 space-y-4">
	<h3>{$_('participate.support.title')}</h3>
	<em>{$_('participate.support.subtitle')}</em>
	<p>{$_('participate.support.body')}</p>
	<ul class="list-disc list-inside">
		<li>
			{$_('participate.support.list1')}
			<a href="">{$_('participate.support.link1')}</a>
			{$_('participate.support.list1.2')}
		</li>
		<li>
			{$_('participate.support.list2')}
			<a href="info@tapatate.ch">{$_('participate.support.link2')}</a>
			{$_('participate.support.list2.2')}
		</li>
		<li>
			{$_('participate.support.list3')}
			<a href="info@tapatate.ch">{$_('participate.support.link2')}</a>
		</li>
		<li>
			{$_('participate.support.list4')}
			<a href="info@tapatate.ch">{$_('participate.support.link2')}</a>
		</li>
	</ul>
</div>

<div class="p-4 space-y-4">
	<h3>{$_('participate.otherOffers.title')}</h3>
	<em>{$_('participate.otherOffers.subtitle')}</em>
	<ul class="list list-inside">
		<li class="list">
			<strong>{$_('participate.otherOffers.offer1.title')}</strong>
			{$_('participate.otherOffers.offer1.body1')}
			<a href="v.birbaum@gmail.com">{$_('participate.otherOffers.offer1.link')}</a>
			{$_('participate.otherOffers.offer1.body2')}
		</li>
		<li>
			<strong>{$_('participate.otherOffers.offer2.title')}</strong>
			{$_('participate.otherOffers.offer2.body1')}
			<a href="http://www.sigasiga.ch/">{$_('participate.otherOffers.offer2.link1')}</a>
			{$_('participate.otherOffers.offer2.body2')}
			<a href="https://sigasiga.payrexx.com/de/?tid=b531fc1d"
				>{$_('participate.otherOffers.offer2.link2')}</a
			>
			{$_('participate.otherOffers.offer2.body3')}
		</li>
		<li>
			<strong>{$_('participate.otherOffers.offer3.title')}</strong>
			{$_('participate.otherOffers.offer3.body1')}
			<a href="v.birbaum@gmail.com">{$_('participate.otherOffers.offer3.link')}</a>
			{$_('participate.otherOffers.offer3.body2')}
		</li>
	</ul>
</div>
