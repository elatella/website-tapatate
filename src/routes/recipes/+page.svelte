<script lang="ts">
	import { locale, _, json } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-recipes.jpg';
	import type { Recipe } from '$lib/Recipe';
	import { recipeSearchTerm } from '$lib/stores';
	import reworkFR from '$lib/images/website_rework_FR.jpg';
	import reworkDE from '$lib/images/website_rework.jpg';

	const images = Object.values(
		import.meta.glob('$lib/images/recipes/*.{jpg,jpeg}', {
			eager: true,
			as: 'url'
		})
	);

	const recipes: Recipe[] = images.map((i) => {
		const parts = i.split('/');
		const id = parts[parts.length - 1].split('.')[0];
		return {
			id,
			title: $_(`recipes.${id}.title`),
			image: i,
			amount: $_(`recipes.${id}.amount`),
			ingredients: $json(`recipes.${id}.ingredients`) as string[],
			instructions: $json(`recipes.${id}.instructions`) as string[]
		};
	});

	let filteredRecipes: Recipe[] = [];
	$: {
		filteredRecipes = recipes.filter((r) => {
			if ($recipeSearchTerm === '') {
				return true;
			}
			if (r.title.toLowerCase().includes($recipeSearchTerm.toLowerCase())) {
				return true;
			}
			for (const i of r.ingredients) {
				if (i.toLowerCase().includes($recipeSearchTerm.toLowerCase())) {
					return true;
				}
			}
			return false;
		});
	}
</script>

<Title title={$_('recipes.title')} {backgroundImage} />

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<img src={$locale && $locale.includes('fr') ? reworkFR : reworkDE} alt={$_('news.news.rework')} />
</div>

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
></div>

<div class="w-full px-8 space-y-16">
	<div class="flex justify-center md:justify-end w-full">
		<input
			type="text"
			placeholder={$_('recipes.search')}
			bind:value={$recipeSearchTerm}
			class="input max-w-xs"
		/>
	</div>

	<div class="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-12">
		{#each filteredRecipes as recipe (recipe.id)}
			<a href="{base}/recipes/{recipe.id}" class="card card-hover p-6 flex flex-col items-center">
				<img src={recipe.image} alt={recipe.title} class="h-full object-cover" />
				<h3 class="h3 mt-4">{recipe.title}</h3>
			</a>
		{/each}
	</div>
</div>
