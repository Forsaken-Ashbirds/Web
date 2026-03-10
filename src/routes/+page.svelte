<script lang="ts">
	import welcomeSvg from '$lib/images/FAB_HeaderWebsite.svg';
	import welcomeFallback from '$lib/images/FAB_HeaderWebsite.png';

	const highlights = [
		{
			title: 'Starke Community',
			text: 'Bei uns stehen Kameradschaft, Respekt und ein entspannter Umgangston im Mittelpunkt – im Spiel genauso wie im Voice.'
		},
		{
			title: 'Star Citizen im Fokus',
			text: 'Trading, Mining und Bounty Hunting gehören zu unseren Lieblingsaktivitäten. Dazu kommen spontane Runden und gemeinsame Events.'
		},
		{
			title: 'Wachsen mit Spaß',
			text: 'Neue Mitglieder werden offen aufgenommen, bekommen Unterstützung beim Einstieg und finden schnell Anschluss an die Gemeinschaft.'
		}
	];
</script>

<svelte:head>
	<title>Forsaken Ashbirds</title>
	<meta
		name="description"
		content="Die Forsaken Ashbirds sind eine entspannte Gaming-Community mit Fokus auf Star Citizen, gemeinsame Abenteuer und langfristige Freundschaften."
	/>
</svelte:head>

<section class="hero" data-testid="home-hero">
	<div class="hero-copy" data-aos="fade-up">
		<p class="eyebrow">Star Citizen · Trading · Mining · Bounty Hunting</p>
		<h1 data-testid="home-hero-title">
			Gemeinsam fliegen. Gelassen spielen. Als Community wachsen.
		</h1>
		<p class="page-intro">
			Die Forsaken Ashbirds verbinden ambitionierte Ingame-Ziele mit einer lockeren,
			erwachsenen Atmosphäre. Wir erleben Abenteuer zusammen, unterstützen uns gegenseitig und
			bauen eine verlässliche Community auf, in der man gern bleibt.
		</p>
		<div class="button-row">
			<a class="cta-button" href="/community">Community entdecken</a>
			<a class="cta-button secondary" href="/about">Mehr über uns</a>
		</div>
	</div>

	<div class="hero-visual" data-aos="zoom-in">
		<div class="welcome">
			<picture>
				<source srcset={welcomeSvg} type="image/svg+xml" />
				<source srcset={welcomeFallback} type="image/png" />
				<img src={welcomeFallback} alt="Forsaken Ashbirds Banner" />
			</picture>
		</div>
	</div>
</section>

<section class="info-grid" aria-label="Unsere Schwerpunkte">
	{#each highlights as highlight, index}
		<article class="info-card" data-aos="fade-up" data-aos-delay={index * 100}>
			<h2>{highlight.title}</h2>
			<p>{highlight.text}</p>
		</article>
	{/each}
</section>

<style lang="scss">
	.hero {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.hero-copy {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.welcome {
		display: flex;
		position: relative;
		width: min(100%, 36rem);
		height: 0;
		padding: 0 0 calc(130% * 495 / 2048) 0;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			display: block;
			filter: drop-shadow(0 1.5rem 3rem rgba(0, 0, 0, 0.3));
		}
	}

	@media (max-width: 840px) {
		.hero {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hero-copy {
			align-items: center;
		}
	}
</style>
