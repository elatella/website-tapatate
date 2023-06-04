<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-gallery.jpg';
	const images = Object.values(
		import.meta.glob('$lib/images/gallery/*.{jpg,jpeg}', {
			eager: true,
			as: 'url'
		})
	);
	import Slideshow from './Slideshow.svelte';

	const years = ['2022', '2021', '2020', '2019', '2018'];

	const imagesByYear = years.map((y) => images.filter((i) => i.includes(y)));
</script>

<Title title={$_('gallery.title')} {backgroundImage} />

<div class="w-full px-8 space-y-16">
	{#each years as year, i}
		<div class="space-y-8">
			<h3>{$_(`gallery.${year}.title`)}</h3>
			<div class="grid sm:grid-cols-3 md:grid-cols-4 gap-12">
				{#each imagesByYear[i] as image, j}
					<button class="card card-hover">
						<img src={image} alt={$_(`gallery.${year}.${j + 1}`)} />
					</button>
				{/each}
			</div>
		</div>
	{/each}
</div>

<Slideshow />
