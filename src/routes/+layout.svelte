<script lang="ts">
	import Header from './Header.svelte';
	import '../style/styles.scss';
	import '../style/main.scss';
	import {onMount} from "svelte";
	import AOS from "aos";

	onMount(() => {
		AOS.init();
	})
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Besuche <a href="ts3server://forsaken-ashbirds" target="_blank" rel="noopener noreferrer"
					  data-sveltekit-preload-data='off'>forsaken-ashbirds</a> um unserem TeamSpeak Sever
			beizutreten.
		</p>
		<p>© {new Date().getFullYear().toString()} Forsaken Ashbirds |
			<a href="/impressum">Impressum</a>
		</p>
	</footer>
</div>
