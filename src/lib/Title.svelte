<script lang="ts">
	export let title: string;
	export let backgroundImage: string;
</script>

<header
	class="flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img bg-opacity-20"
	style="background-image: url({backgroundImage})"
>
	<div class="p-5 text-2xl bg-white bg-opacity-70 rounded-xl">{title}</div>
</header>
