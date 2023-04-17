<script lang="ts">
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-knowledge.jpg';
	import { _ } from 'svelte-i18n';
</script>

<Title title={$_('knowledge.title')} {backgroundImage} />

<div class="p-4 space-y-2">
	<h3>{$_('knowledge.solawi.title')}</h3>
	<em>{$_('knowledge.solawi.subtitle')}</em>
	<ul class="p-4 space-y-1">
		<li>{$_('knowledge.solawi.question1')}</li>
		<li>{$_('knowledge.solawi.body1')}</li>
	</ul>
	<ul class="p-4 space-y-1">
		<li>{$_('knowledge.solawi.question2')}</li>
		<li>{$_('knowledge.solawi.body2')}</li>
	</ul>
	<ul class="p-4 space-y-1">
		<li>{$_('knowledge.solawi.question3')}</li>
		<ul class="list-disc p-4 space-y-1">
			<li>{$_('knowledge.solawi.body31')}</li>
			<li>{$_('knowledge.solawi.body32')}</li>
			<li>{$_('knowledge.solawi.body33')}</li>
			<li>{$_('knowledge.solawi.body34')}</li>
			<li>{$_('knowledge.solawi.body35')}</li>
		</ul>
	</ul>
	<ul class="p-4 space-y-1">
		<li>{$_('knowledge.solawi.question4')}</li>
		<li>{$_('knowledge.solawi.body4')}</li>
	</ul>
	<p>
		{$_('knowledge.solawi.body5')}
		<a href="https://www.solawi.ch">{$_('knowledge.solawi.link1')}</a>
		{$_('knowledge.solawi.comma')}
		<a href="https://www.regionalevertragslandwirtschaft.ch">{$_('knowledge.solawi.link2')}</a>
		{$_('knowledge.solawi.dot')}
	</p>
</div>
