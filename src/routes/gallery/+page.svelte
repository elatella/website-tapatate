<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-gallery.jpg';
</script>

<Title title={$_('gallery.title')} {backgroundImage} />

<div>
	<h3>{$_('gallery.2022')}</h3>
	<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6" />
</div>
<div>
	<h3>{$_('gallery.2021')}</h3>
</div>
<div>
	<h3>{$_('gallery.2020')}</h3>
</div>
<div>
	<h3>{$_('gallery.2019')}</h3>
</div>
<div>
	<h3>{$_('gallery.2018')}</h3>
</div>
