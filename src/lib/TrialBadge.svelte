<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let size: number;
	export let link: string;
</script>

<a href={link}>
	<div class="relative">
		<div
			class="starburst bg-tertiary-700 hover:bg-tertiary-600 text-center"
			style="width:{size}px;height:{size}px"
		>
			<div
				style="position:relative;top:30%;transform:rotate(10deg);font-size:{size /
					7}px;line-height:140%;"
			>
				{$_('subscriptions.harvest.buyTrial')}<br />{$_('subscriptions.harvest.buyTrial2')}
			</div>
		</div>
	</div>
</a>

<style>
	.starburst {
		position: absolute;
		border-color: white;
		top: -50px;
		right: -8%;
		aspect-ratio: 1;
		color: white;
		font-weight: bold;
		clip-path: polygon(
			100% 50%,
			95.75% 54.81%,
			98.91% 60.4%,
			93.75% 64.21%,
			95.68% 70.34%,
			89.84% 73%,
			90.45% 79.39%,
			84.18% 80.78%,
			83.46% 87.16%,
			77.04% 87.21%,
			75% 93.3%,
			68.71% 92.02%,
			65.45% 97.55%,
			59.56% 94.99%,
			55.23% 99.73%,
			50% 96%,
			44.77% 99.73%,
			40.44% 94.99%,
			34.55% 97.55%,
			31.29% 92.02%,
			25% 93.3%,
			22.96% 87.21%,
			16.54% 87.16%,
			15.82% 80.78%,
			9.55% 79.39%,
			10.16% 73%,
			4.32% 70.34%,
			6.25% 64.21%,
			1.09% 60.4%,
			4.25% 54.81%,
			0% 50%,
			4.25% 45.19%,
			1.09% 39.6%,
			6.25% 35.79%,
			4.32% 29.66%,
			10.16% 27%,
			9.55% 20.61%,
			15.82% 19.22%,
			16.54% 12.84%,
			22.96% 12.79%,
			25% 6.7%,
			31.29% 7.98%,
			34.55% 2.45%,
			40.44% 5.01%,
			44.77% 0.27%,
			50% 4%,
			55.23% 0.27%,
			59.56% 5.01%,
			65.45% 2.45%,
			68.71% 7.98%,
			75% 6.7%,
			77.04% 12.79%,
			83.46% 12.84%,
			84.18% 19.22%,
			90.45% 20.61%,
			89.84% 27%,
			95.68% 29.66%,
			93.75% 35.79%,
			98.91% 39.6%,
			95.75% 45.19%
		);
	}
</style>
