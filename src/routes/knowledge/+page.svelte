<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-knowledge.jpg';
</script>

<Title title={$_('knowledge.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h2>{$_('knowledge.solawi.title')}</h2>
			<p><em>{$_('knowledge.solawi.subtitle')}</em></p>
		</div>

		<div class="space-y-4">
			<p>{$_('knowledge.solawi.question1')}</p>
			<p>{$_('knowledge.solawi.body1')}</p>
		</div>

		<div class="space-y-4">
			<p>{$_('knowledge.solawi.question2')}</p>
			<p>{$_('knowledge.solawi.body2')}</p>
		</div>

		<div class="space-y-4">
			<p>{$_('knowledge.solawi.question3')}</p>
			<ul class="list-disc list-inside pl-4">
				<li>{$_('knowledge.solawi.body31')}</li>
				<li>{$_('knowledge.solawi.body32')}</li>
				<li>{$_('knowledge.solawi.body33')}</li>
				<li>{$_('knowledge.solawi.body34')}</li>
				<li>{$_('knowledge.solawi.body35')}</li>
			</ul>
		</div>

		<div class="space-y-4">
			<p>{$_('knowledge.solawi.question4')}</p>
			<p>{$_('knowledge.solawi.body4')}</p>
		</div>

		<div class="space-y-4">
			<p>
				{$_('knowledge.solawi.body5')}
				<a href="https://{$_('knowledge.solawi.link1')}">{$_('knowledge.solawi.link1')}</a>{$_(
					'knowledge.solawi.comma'
				)}
				<a href="https://www.regionalevertragslandwirtschaft.ch">{$_('knowledge.solawi.link2')}</a
				>{$_('knowledge.solawi.dot')}
			</p>
		</div>
	</section>
</div>
