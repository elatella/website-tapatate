<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-news.jpg';
	import umbauDe from '$lib/images/umbau-de.png';
	import umbauFr from '$lib/images/umbau-fr.png';
	import hofFaver from '$lib/images/hofFaver.png';
	import kalenderDe from '$lib/images/kalender2024-de.png';
	import kalenderFr from '$lib/images/kalender2024-fr.png';
	import bottle from '$lib/images/bottle.png';
	import bag from '$lib/images/bag.png';
	import job from '$static/docs/Stellenausschreibung_Gemuese2025.pdf';
</script>

<Title title={$_('news.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h2 class="h2">{$_('news.news.title')}</h2>
			<p><em>{$_('news.news.subtitle')}</em></p>
		</div>

		<div class="space-y-4">
			<div
				class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12"
			>
				<img
					src={$locale && $locale.includes('fr') ? umbauFr : umbauDe}
					alt={$_('news.news.rennovation')}
				/>
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.hiring.title')}</h3>
			<p>{$_('news.hiring.body')}</p>
			<p>
				<a href={job} class="anchor">{$_('news.hiring.link')}</a>
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.hofFaver.title')}</h3>
			<p>{$_('news.hofFaver.body')}</p>
			<div
				class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12"
			>
				<img src={hofFaver} alt={$_('news.hofFaver.faverfarm')} class="w-96" />
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.subscriptions.title')}</h3>
			<p>
				<a href="{base}/subscriptions" class="anchor">{$_('news.subscriptions.link')}</a>
				{$_('news.subscriptions.body1')}
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.merch.title')}</h3>
			<p>{$_('news.merch.body')}</p>
			<div
				class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12"
			>
				<img src={bottle} alt={$_('news.merch.bottle')} class="w-32" />
				<img src={bag} alt={$_('news.merch.bag')} class="w-32" />
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.events.title')}</h3>
			<p><em>{$_('news.events.subtitle')}</em></p>
			<div
				class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12"
			>
				<img
					src={$locale && $locale.includes('fr') ? kalenderFr : kalenderDe}
					class="w-96"
					alt={$_('news.events.kalender')}
				/>
			</div>
		</div>
	</section>
</div>
