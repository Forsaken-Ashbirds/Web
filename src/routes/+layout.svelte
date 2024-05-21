<script lang="ts">
	import { PUBLIC_VERSION } from '$env/static/public';
	import Header from './Header.svelte';
	import '../style/index.scss';
	import '../style/components/main.scss';
	import '../style/components/footer.scss';
	import { onMount } from 'svelte';
	import AOS from 'aos';

	let currentTime = new Date();

	// Funktion, um die Zeit zu aktualisieren
	function updateTime() {
		currentTime = new Date();
	}

	// Interval einrichten, um die Zeit jede Sekunde zu aktualisieren
	let interval: unknown;

	onMount(() => {
		AOS.init();

		interval = setInterval(updateTime, 1000);

		// Cleanup-Funktion
		return () => {
			clearInterval(interval as number);
		};
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Besuche <a
				href="ts3server://forsaken-ashbirds"
				target="_blank"
				rel="noopener noreferrer external">forsaken-ashbirds</a
			>
			um unserem TeamSpeak Sever beizutreten.
		</p>
		<p>
			© {new Date().getFullYear().toString()} Forsaken Ashbirds |
			<a href="/impressum">Impressum</a>
		</p>
		<ul id="meta-info" style="display: none">
			<li>Version: {PUBLIC_VERSION}</li>
		</ul>
		<p>
			{currentTime.getHours().toString().length < 2
				? '0' + currentTime.getHours()
				: currentTime.getHours()}:{currentTime.getMinutes().toString().length < 2
				? '0' + currentTime.getMinutes()
				: currentTime.getMinutes()}:{currentTime.getSeconds().toString().length < 2
				? '0' + currentTime.getSeconds()
				: currentTime.getSeconds()}
		</p>
	</footer>
</div>
