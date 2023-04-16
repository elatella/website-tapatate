<script lang="ts">
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-participate.jpg';
	import { _ } from 'svelte-i18n';
</script>

<Title title={$_('participate.title')} {backgroundImage} />
