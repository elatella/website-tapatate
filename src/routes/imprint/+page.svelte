<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full p-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="space-y-4">
			<h1 class="h1">{$_('imprint.title')}</h1>
		</div>

		<h2 class="h2">{$_('imprint.contact')}</h2>
		<p>
			TaPatate!<br />
			Valentin Birbaum<br />
			Murtenstrasse 37<br />
			3206 Wallenbuch
		</p>
		<p>
			E-Mail: <a href="mailto:info@tapatate.ch">info@tapatate.ch</a>
		</p>
	</section>
</div>
