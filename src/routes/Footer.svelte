<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
</script>

<div class="bg-slate-200 p-16 flex flex-col md:flex-row justify-around gap-12 text-sm">
	<div class="text-center space-y-1">
		<p>{$_('footer.other')}</p>
		<p><a href="{base}/media">{$_('footer.media')}</a></p>
		<p>{$_('footer.depots')}</p>
	</div>

	<div class="text-center space-y-2">
		<p>
			<a href="mailto:info@tapatate.ch">info@tapatate.ch</a>
		</p>
		<p>
			<a href="https://www.facebook.com/TaPatate-2011861462384623/" target="_blank">Facebook</a>
		</p>
		<p>
			<a href="https://www.instagram.com/tapatate.ch/" target="_blank">Instagram</a>
		</p>
		<p>Copyright © TaPatate! 2020</p>
	</div>

	<div class="text-center space-y-1">
		<p>{$_('footer.address')}</p>
		<p>Valentin Birbaum</p>
		<p>Murtenstrasse 37</p>
		<p>3206 Wallenbuch</p>
	</div>
</div>
