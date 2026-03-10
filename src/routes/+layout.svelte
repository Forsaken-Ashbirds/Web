<script lang="ts">
	import { PUBLIC_VERSION } from '$env/static/public';
	import Header from './Header.svelte';
	import '../style/index.scss';
	import '../style/components/main.scss';
	import '../style/components/footer.scss';
	import { onMount } from 'svelte';
	import AOS from 'aos';

	let currentTime = new Date();
	const timeFormatter = new Intl.DateTimeFormat('de-DE', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});

	// Funktion, um die Zeit zu aktualisieren
	function updateTime() {
		currentTime = new Date();
	}

	// Interval einrichten, um die Zeit jede Sekunde zu aktualisieren
	let interval: ReturnType<typeof setInterval> | undefined = undefined;

	onMount(() => {
		AOS.init();

		interval = setInterval(updateTime, 1000);

		// Cleanup-Funktion
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-content">
			<p>
				Besuche <a
					href="ts3server://forsaken-ashbirds"
					target="_blank"
					rel="noopener noreferrer external">forsaken-ashbirds</a
				>
				um unserem TeamSpeak Server beizutreten.
			</p>
			<p>
				© {new Date().getFullYear().toString()} Forsaken Ashbirds |
				<a href="/impressum">Impressum</a>
			</p>
		</div>
		<ul id="meta-info" style="display: none">
			<li>Version: {PUBLIC_VERSION}</li>
		</ul>
		<p class="footer-clock" aria-label="Aktuelle Uhrzeit">
			{timeFormatter.format(currentTime)}
		</p>
	</footer>
</div>
