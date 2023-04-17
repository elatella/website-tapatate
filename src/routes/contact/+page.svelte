<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-contact.jpg';
</script>

<Title title={$_('contact.title')} {backgroundImage} />
