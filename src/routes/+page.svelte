<script lang="ts">
	import { translate } from '$lib/i18n';
	import welcome_fallback from '$lib/images/FAB_HeaderWebsite.png';
	import welcome from '$lib/images/FAB_HeaderWebsite.svg';

	const pageTitle = translate('home.meta.title');
	const pageDescription = translate('home.meta.description');
	const heroHeading = translate('home.heading');
	const heroSubtitle = translate('home.hero.subtitle');
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content={$pageDescription} />
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
	<h2 data-aos="fade-up">{$heroHeading}</h2>
	<p class="subtitle" data-aos="fade-up" data-aos-delay="100">{$heroSubtitle}</p>
</section>

<style lang="scss">
	@use '../style/constants';

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
		text-shadow: constants.$box-shadow-main;
		font-size: 3rem;
	}

	.subtitle {
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		margin-top: 1rem;
		text-align: center;
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
