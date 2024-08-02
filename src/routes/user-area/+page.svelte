<script lang="ts">
	
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-user-area.jpg';
	import familyEngagement from '$lib/images/userArea-familieneinsaetze.jpg';
	import bagsInfo from '$lib/images/userArea-taschen.jpg';
</script>

<Title title={$_('userArea.title')} {backgroundImage} />

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.adminTool.title')}</h3>
			<a href="https://membres.tapatate.ch" class="btn variant-filled"
				>{$_('userArea.adminTool.title')}</a
			>
			<p>{$_('userArea.adminTool.description')}</p>
			<ul class="list-disc list-inside pl-4">
				<li>{$_('userArea.adminTool.body1')}</li>
				<li>{$_('userArea.adminTool.body2')}</li>
				<li>{$_('userArea.adminTool.body3')}</li>
				<li>{$_('userArea.adminTool.body4')}</li>
				<li>{$_('userArea.adminTool.body5')}</li>
			</ul>
			<p class="italic">{$_('userArea.adminTool.body6')}</p>
			<br />
		</div>
	</section>

	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.adminTool.title2')}</h3>

			<ol class="list-decimal list-inside pl-4">
				<li>
					{$_('userArea.adminTool.body7')}
					<a class="anchor" href="mailto:info@tapatate.ch">{$_('userArea.adminTool.link1')}</a>
					{$_('userArea.adminTool.body8')}
				</li>
				<p class="italic">
					{$_('userArea.adminTool.body9')}
					<a class="anchor" href="mailto:info@tapatate.ch">{$_('userArea.adminTool.link2')}</a>
					{$_('userArea.adminTool.body10')}
				</p>
				<li>{$_('userArea.adminTool.body11')}</li>
				<li>{$_('userArea.adminTool.body12')}</li>
			</ol>
			<br />
		</div>
	</section>

	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.engagement.title')}</h3>
			<h5 class="h5">{$_('userArea.engagement.subtitle1')}</h5>
			<p>{$_('userArea.engagement.body1')}</p>
			<p>
				{$_('userArea.engagement.body2')}
				<em>{$_('userArea.engagement.body3')}</em>
				{$_('userArea.engagement.body4')}
			</p>
			<p>{$_('userArea.engagement.body5')}</p>
			<p>{$_('userArea.engagement.body6')}</p>
			<ul class="list-disc list-inside pl-4">
				<li>{$_('userArea.engagement.list1')}</li>
				<li>{$_('userArea.engagement.list2')}</li>
				<li>{$_('userArea.engagement.list3')}</li>
				<li>{$_('userArea.engagement.list4')}</li>
				<li>{$_('userArea.engagement.list5')}</li>
				<li>{$_('userArea.engagement.list6')}</li>
			</ul>
			<a class="anchor" href="{base}/contact">{$_('userArea.engagement.body7')}</a>
		</div>

		<div class="space-y-4">
			<h5 class="h5">{$_('userArea.engagement.subtitle2')}</h5>
			<img src={familyEngagement} class="w-96" alt={$_('userArea.engagement.subtitle2')} />
			<p>{$_('userArea.engagement.body8')}</p>
		</div>
		<div class="space-y-4">
			<h5 class="h5">{$_('userArea.engagement.subtitle3')}</h5>
			<p>{$_('userArea.engagement.body9')}</p>
		</div>
		<br />
		<br />
	</section>
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.bags.title')}</h3>
			<p>{$_('userArea.bags.body1')}</p>
			<p>{$_('userArea.bags.body2')}</p>
			<p>{$_('userArea.bags.body3')}</p>
			<p class="italic">{$_('userArea.bags.body4')}</p>
			<p>{$_('userArea.bags.body5')}</p>
			<ul class="list-disc list-inside pl-4">
				<li>{$_('userArea.bags.list1')}</li>
				<li>{$_('userArea.bags.list2')}</li>
			</ul>
			<p>
				{$_('userArea.bags.body6')}
				<a class="anchor" href="mailto:info@tapatate.ch">{$_('userArea.bags.link1')}</a>
				{$_('userArea.bags.body7')}
			</p>
			<img src={bagsInfo} alt={$_('userArea.bags.title')} />
			<br />
			<br />
		</div>
	</section>
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h3 class="h3">{$_('userArea.bike.title')}</h3>
			<p>
				{$_('userArea.bike.body1')}
				<a class="anchor" href="mailto:info@tapatate.ch">{$_('userArea.bike.link1')}</a>
				{$_('userArea.bike.body2')}
			</p>
		</div>
	</section>
</div>
