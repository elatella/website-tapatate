<script lang="ts">
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-project.jpg';
	import { _ } from 'svelte-i18n';
</script>

<Title title={$_('project.title')} {backgroundImage} />
