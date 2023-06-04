<script lang="ts">
	export let title: string;
	export let backgroundImage: string;
</script>

<header
	class="flex items-center justify-center h-96 mb-20 bg-fixed bg-center bg-cover"
	style="background-image: url({backgroundImage})"
>
	<h1 class="p-5 text-6xl text-white">{title}</h1>
</header>
