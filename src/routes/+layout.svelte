<script lang="ts">
	import Header from './Header.svelte';
	import '../style/styles.scss';
	import '../style/main.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Besuche <a href="ts3server://forsaken-ashbirds">forsaken-ashbirds</a> um unserem TeamSpeak Sever
			beizutreten.
		</p>
		<span
			>© {new Date().getFullYear().toString()} Forsaken Ashbirds |
			<a href="/impressum">Impressum</a></span
		>
	</footer>
</div>
