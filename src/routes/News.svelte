<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-news.jpg';
	import bottle from '$lib/images/bottle.png';
	import bag from '$lib/images/bag.png';
	import familypdf from '$lib/images/Familientage_2025.pdf';
</script>

<Title title={$_('news.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h2 class="h2">{$_('news.news.title')}</h2>
			<p><em>{$_('news.news.subtitle')}</em></p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.new_abos.title')}</h3>
			<p>
				{$_('news.new_abos.body1')}
				<b>{$_('news.new_abos.abo1')}</b>
				{$_('news.new_abos.body2')}
				<b>{$_('news.new_abos.abo2')}</b>
				{$_('news.new_abos.body3')}
				<a href={'https://tapatate.ch/subscriptions/'} class="anchor">{$_('news.new_abos.link')}</a>
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.familydays.title')}</h3>
			<p>
				{$_('news.familydays.body')}
				<a href={familypdf} class="anchor">{$_('news.familydays.link')}</a>
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
		</div>
	</section>
</div>
