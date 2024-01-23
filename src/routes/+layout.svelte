<script lang="ts">
	import { PUBLIC_VERSION } from '$env/static/public';
	import Header from './Header.svelte';
	import '../style/styles.scss';
	import '../style/components/main.scss';
	import '../style/components/footer.scss';
	import { onMount } from 'svelte';
	import AOS from 'aos';

	onMount(() => {
		AOS.init();
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Besuche <a href="ts3server://forsaken-ashbirds" target="_blank" rel="noopener noreferrer external">forsaken-ashbirds</a>
			um unserem TeamSpeak Sever
			beizutreten.
		</p>
		<p>© {new Date().getFullYear().toString()} Forsaken Ashbirds | <a href="/impressum">Impressum</a></p>
		<ul id="meta-info" style="display: none">
			<li>Version: { PUBLIC_VERSION }</li>
		</ul>
	</footer>
</div>
