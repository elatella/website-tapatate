<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-farm.jpg';
	import farm from '$lib/images/farm.jpg';
	import veggies from '$lib/images/veggies.jpg';
</script>

<Title title={$_('farm.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3>{$_('farm.farm.title')}</h3>
			<p>{$_('farm.farm.body1')}</p>
			<p>{$_('farm.farm.body2')}</p>
			<img src={farm} alt={$_('farm.farm.title')} class="py-12" />
			<p>
				{$_('farm.farm.body3')}
				<a href="mailto:info@tapatate.ch">info@tapatate.ch</a>
				{$_('farm.farm.body4')}
			</p>
		</div>

		<div class="space-y-4">
			<h3>{$_('farm.veggies.title')}</h3>
			<p>{$_('farm.veggies.body1')}</p>
			<p>{$_('farm.veggies.body2')}</p>
			<img src={veggies} alt={$_('farm.veggies.title')} class="py-12" />
		</div>
	</section>
</div>
