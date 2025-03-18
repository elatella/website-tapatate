<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import TrialBadge from '$lib/TrialBadge.svelte';

	export let id: string;
	export let image: string;
	export let hasTrial: boolean;

	let flipped = false;
</script>

<button
	class="card card-hover"
	on:click={() => {
		flipped = !flipped;
	}}
>
	{#if hasTrial}
		<TrialBadge size={90} link="https://membres.tapatate.ch/new?locale={$locale}" />
	{/if}
	{#if !flipped}
		<img src={image} alt={$_(`subscriptions.harvest.${id}.name`)} />
	{/if}
	<header class="card-header py-8">
		<strong>{$_(`subscriptions.harvest.${id}.name`)}</strong>
	</header>
	{#if flipped}
		<div class="p-3">
			<ul>
				<li>{$_(`subscriptions.harvest.${id}.people`)}</li>
				<li>{$_(`subscriptions.harvest.${id}.price`)}</li>
				<li>{$_(`subscriptions.harvest.${id}.deliveries`)}</li>
				<li>{$_(`subscriptions.harvest.${id}.parts`)}</li>
				<li>{$_(`subscriptions.harvest.${id}.subscriptions`)}</li>
			</ul>
			{#if hasTrial}
				<br />
				<ul class="text-tertiary-700">
					<li><strong>{$_('subscriptions.harvest.trial')}</strong></li>
					<li>{$_(`subscriptions.harvest.${id}.trialDeliveries`)}</li>
					<li>{$_(`subscriptions.harvest.${id}.trialSubscriptions`)}</li>
				</ul>
			{/if}
		</div>
	{/if}
</button>
