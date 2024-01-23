<script>
	import {dev} from "$app/environment";
</script>

<svelte:head>
	<title>Community</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="text-column">
	<h1>Community</h1>
	{#if dev}
		<h2>Erfahre mehr über unsere Projekte</h2>
	{/if}
	{#if !dev}
		<h2>Under construction</h2>
		<p>This page will be coming soon...</p>
	{/if}
</div>

<style lang="scss">
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		text-align: center;

		h2 {
			margin-top: 2rem;
			font-family: 'Roboto', sans-serif;
			text-decoration: none;
		}
	}
</style>
