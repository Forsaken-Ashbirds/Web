<script>
	import welcome from '$lib/images/FAB_HeaderWebsite.webp';
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
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		Welcome to SvelteKit!
	</h1>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: auto;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			display: block;
		}
	}
</style>
