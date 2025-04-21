<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { locale } from 'svelte-i18n';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-gallery.jpg';
	import reworkFR from '$lib/images/website_rework_FR.jpg';
	import reworkDE from '$lib/images/website_rework.jpg';
	const images = Object.values(
		import.meta.glob('$lib/images/gallery/*.{jpg,jpeg}', {
			eager: true,
			as: 'url'
		})
	);

	const modalStore = getModalStore();

	const years = ['2022', '2021', '2020', '2019', '2018'];

	const imagesByYear = years.map((y) => images.filter((i) => i.includes(y)));

	function openImage(year: string, index: number, image: string) {
		modalStore.trigger({
			type: 'alert',
			body: $_(`gallery.${year}.${index + 1}`),
			image
		});
	}
</script>

<Title title={$_('gallery.title')} {backgroundImage} />

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<img src={$locale && $locale.includes('fr') ? reworkFR : reworkDE} alt={$_('news.news.rework')} />
</div>

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<div class="space-y-4">
		<h3 class="h3">{$_('gallery.subtitle')}</h3>
	</div>
</div>

<div class="w-full px-8 space-y-16">
	{#each years as year, i}
		<div class="space-y-8">
			<div class="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-12">
				{#each imagesByYear[i] as image, j}
					<button
						class="card card-hover"
						style="box-shadow:none"
						on:click={() => {
							openImage(year, j, image);
						}}
					>
						<img src={image} alt={$_(`gallery.${year}.${j + 1}`)} />
					</button>
				{/each}
			</div>
		</div>
	{/each}
</div>
