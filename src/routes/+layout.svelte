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
		<p data-sveltekit-preload-data='off' >
			Besuche <a href="https://ts.forsaken-ashbirds.de" target="_blank">forsaken-ashbirds</a> um unserem TeamSpeak Sever
			beizutreten.
		</p>
		<span
			>© {new Date().getFullYear().toString()} Forsaken Ashbirds |
			<a href="/impressum">Impressum</a></span
		>
	</footer>
</div>
