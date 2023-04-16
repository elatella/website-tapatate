<script lang="ts">
	import bgSrc from '$lib/images/bg-news.jpg';
	import { _ } from 'svelte-i18n';
</script>

<header
	class="flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img"
	style="background-image: url({bgSrc})"
>
	<div class="p-5 text-2xl bg-white bg-opacity-50 rounded-xl">{$_('news.title')}</div>
</header>
