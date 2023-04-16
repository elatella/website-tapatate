<script lang="ts">
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-knowledge.jpg';
	import { _ } from 'svelte-i18n';
</script>

<Title title={$_('knowledge.title')} {backgroundImage} />
