<script lang="ts">
	import welcome from '$lib/images/FAB_HeaderWebsite.svg';
	import welcome_fallback from '$lib/images/FAB_HeaderWebsite.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/svg+xml" />
				<source srcset={welcome_fallback} type="image/png" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
	<h2 data-aos="fade-up">Willkommen bei den Forsaken Ashbirds!</h2>
</section>

<style lang="scss">
	@import '../style/constants';

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.75;
	}

	h1 {
		width: 100%;
		text-align: center;
	}

	h2 {
		font-family: 'Roboto', sans-serif;
		text-decoration: none;
		text-shadow: $box-shadow-main;
		font-size: 3rem;
	}

	.welcome {
		display: flex;
		position: relative;
		width: auto;
		height: 0;
		padding: 0 0 calc(130% * 495 / 2048) 0;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			display: block;
		}
	}
</style>
