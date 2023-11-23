<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-news.jpg';
	import aBoimiga from '$lib/images/recipes/a-boimiga.jpeg';
	import bottle from '$lib/images/bottle.png';
	import bag from '$lib/images/bag.png';
</script>

<Title title={$_('news.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h2 class="h2">{$_('news.news.title')}</h2>
			<p><em>{$_('news.news.subtitle')}</em></p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.boimiga.title')}</h3>
			<p>
				<a href="{base}/docs/Recipe_A_Boimiga_{$locale}.pdf" class="anchor"
					>{$_('news.boimiga.body')}</a
				>
			</p>
			<div
				class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12"
			>
				<img src={aBoimiga} alt={$_('news.boimiga.title')} class="w-96" />
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
			<h3 class="h3">{$_('news.april23.title')}</h3>
			<p>
				{$_('news.april23.body')}
				<a href="mailto:info@tapatate.ch" class="anchor">{$_('news.april23.link')}</a>!
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.july22.title')}</h3>
			<p class="pb-4">
				{$_('news.july22.body1')}
				<a
					href="https://www.bauernzeitung.ch/artikel/pflanzen/wir-wollen-den-ganzen-betrieb-auf-agroforst-umstellen-424451"
				>
					{$_('news.july22.link')}
				</a>
				{$_('news.july22.body2')}
			</p>
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/j7wRwpkve58"
					title="YouTube video player"
					frameborder="0"
					allowfullscreen
					class="w-full"
				/>
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="h3">{$_('news.events.title')}</h3>
			<p><em>{$_('news.events.subtitle')}</em></p>
			<p>{$_('news.events.placeholder')}</p>
		</div>
	</section>
</div>
