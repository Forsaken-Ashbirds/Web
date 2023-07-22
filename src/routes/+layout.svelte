<script lang="ts">
	import { Theme } from '../enums/theme.enum';
	import Header from './Header.svelte';
	import './styles.css';

	export let theme: Theme = Theme.DARK;

	const toggleTheme = () => {
		if (theme === Theme.DARK) {
			theme = Theme.LIGHT;
		} else {
			theme = Theme.DARK;
		}
	};

	const firstLetterToUpperCase = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const setMoonOrSun = (theme: Theme) => {
		if (theme === Theme.DARK) {
			return '🌙';
		} else {
			return '☀️';
		}
	};
</script>

<div class="app {theme}">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			besuche <a href="ts3server://forsaken-ashbirds">forsaken-ashbirds</a> um unserem TeamSpeak Sever
			beizutreten
		</p>
		<span
			>© {new Date().getFullYear().toString()} Forsaken Ashbirds |
			<a href="/impressum">Impressum</a>
			| <button on:click={toggleTheme}>{setMoonOrSun(theme)}</button></span
		>
	</footer>
</div>

<style lang="scss">
	@import '../style/main';

</style>
