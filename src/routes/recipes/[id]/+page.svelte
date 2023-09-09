<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { _, json } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import type { Recipe } from '$lib/Recipe';
	import { recipeSearchTerm } from '$lib/stores';

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
	const recipe = recipes.find((r) => r.id === $page.params.id);
	if (!recipe) {
		throw error(404, `Recipe ${$page.params.id} not found`);
	}
</script>

<div class="w-full px-8 space-y-16 flex flex-col items-center">
	<ol class="breadcrumb mt-8">
		<li class="crumb">
			<a class="anchor" href="{base}/recipes"
				>{$recipeSearchTerm === '' ? '' : `"${$recipeSearchTerm}" `}{$_('recipes.title')}</a
			>
		</li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li class="crumb">{recipe.title}</li>
	</ol>

	<h1 class="h1 mb-4">{recipe.title}</h1>
	<img src={recipe.image} alt={recipe.title} class="max-h-96" />

	<h2 class="h2">{$_('recipes.ingredients')} {recipe.amount}</h2>
	<ul>
		{#each recipe.ingredients as ingredient}
			<li class="list-inside">{ingredient}</li>
		{/each}
	</ul>

	<h2 class="h2">{$_('recipes.instructions')}</h2>
	<ol class="list-decimal list-inside">
		{#each recipe.instructions as instruction}
			<li>{instruction}</li>
		{/each}
	</ol>
</div>
