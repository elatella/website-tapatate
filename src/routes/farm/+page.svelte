<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-farm.jpg';
	import farm from '$lib/images/farm.jpg';
	import veggies from '$lib/images/veggies.jpg';
	import fruits from '$lib/images/fruits.jpg';
	import DepotMap from '$lib/DepotMap.svelte';
</script>

<Title title={$_('farm.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('farm.farm.title')}</h3>
			<p>{$_('farm.farm.body1')}</p>
			<p>{$_('farm.farm.body2')}</p>
			<figure class="py-12">
				<img src={farm} alt={$_('farm.farm.title')} class="rounded-md" />
			</figure>
			<p>
				{$_('farm.farm.body3')}
				<a href="mailto:info@tapatate.ch">info@tapatate.ch</a>{$_('farm.farm.body4')}
			</p>
		</div>

		<DepotMap />

		<div class="space-y-4">
			<h3 class="h3" id="veggies">{$_('farm.veggies.title')}</h3>
			<p>{$_('farm.veggies.body1')}</p>
			<p>{$_('farm.veggies.body2')} <a href="mailto:info@tapatate.ch">info@tapatate.ch</a>.</p>
			<figure class="py-12">
				<img src={veggies} alt={$_('farm.veggies.title')} class="rounded-md" />
			</figure>
		</div>

		<div class="space-y-4">
			<h3 class="h3" id="fruits">{$_('farm.fruits.title')}</h3>
			<p>{$_('farm.fruits.body1')}</p>
			<p>{$_('farm.fruits.body2')} <a href="mailto:info@tapatate.ch">info@tapatate.ch</a>.</p>
			<figure class="py-12">
				<img src={fruits} alt={$_('farm.fruits.title')} class="rounded-md" />
			</figure>
		</div>
	</section>
</div>
