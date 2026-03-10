<script lang="ts">
	const highlights = [
		{
			title: 'Trading',
			text: 'Gemeinsam Routen planen, Fracht sichern und profitabel unterwegs sein – mit Unterstützung und Platz für Einsteiger wie Veteranen.'
		},
		{
			title: 'Mining',
			text: 'Ob entspannte Ressourcenrunden oder koordinierte Gruppenaktionen: Wir teilen Wissen, Ausrüstungstipps und Erfahrung.'
		},
		{
			title: 'Bounty Hunting',
			text: 'Für alle, die Action suchen, gehören Jagden, Eskorten und fordernde Einsätze fest zu unseren Community-Aktivitäten.'
		}
	];

	const steps = [
		'Schau dich auf der Website um und verschaffe dir einen ersten Eindruck von unseren Werten und Schwerpunkten.',
		'Nimm über TeamSpeak Kontakt zu uns auf und lerne die ersten Mitglieder in lockerer Atmosphäre kennen.',
		'Steig bei einer gemeinsamen Runde ein und finde heraus, ob unser Stil, unser Humor und unser Anspruch zu dir passen.'
	];
</script>

<svelte:head>
	<title>Community</title>
	<meta
		name="description"
		content="Entdecke die Community der Forsaken Ashbirds mit Trading, Mining, Bounty Hunting und einer offenen erwachsenen Gemeinschaft."
	/>
</svelte:head>

<div class="text-column">
	<p class="eyebrow">Mitmachen & ankommen</p>
	<h1>Community</h1>
	<p class="page-intro">
		Unsere Community verbindet Abenteuer, Wachstum und Kameradschaft. Wir wollen gemeinsam etwas
		erleben, voneinander lernen und eine Atmosphäre schaffen, in der man gern Teil des Teams
		wird.
	</p>

	<section class="info-grid" aria-label="Community Highlights">
		{#each highlights as highlight}
			<article class="info-card">
				<h2>{highlight.title}</h2>
				<p>{highlight.text}</p>
			</article>
		{/each}
	</section>

	<section class="journey">
		<h2>So kannst du einsteigen</h2>
		<ol class="steps">
			{#each steps as step}
				<li class="info-card">
					<p>{step}</p>
				</li>
			{/each}
		</ol>
	</section>
</div>

<style lang="scss">
	.text-column {
		align-items: stretch;
	}

	.journey {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
