<script lang="ts">
	import TalkTab from '../../components/talkTab.svelte';
	import { Direction } from '../../enums/direction.enum';

	const sections = [
		{
			title: 'Gemeinschaft mit Haltung',
			text: 'Bei den Forsaken Ashbirds treffen Spielerinnen und Spieler aufeinander, die Teamplay lieben, sich gegenseitig unterstützen und Wert auf einen respektvollen Umgang legen.'
		},
		{
			title: 'Wachstum ohne Leistungsdruck',
			text: 'Wir wollen besser werden, neue Rollen ausprobieren und gemeinsam dazulernen – aber ohne toxische Stimmung, Ellenbogenmentalität oder unnötigen Stress.'
		},
		{
			title: 'Abenteuer mit Struktur',
			text: 'Von spontanen Abenden bis zu geplanten Einsätzen schaffen wir Raum für Erlebnisse, die Spaß machen und als Team lange in Erinnerung bleiben.'
		},
		{
			title: 'Offen für neue Mitglieder',
			text: 'Unsere Community richtet sich an Spieler ab 18 Jahren. Deutsch und Englisch sind unsere Hauptsprachen – wichtig ist vor allem, dass die Chemie stimmt.'
		}
	];
</script>

<svelte:head>
	<title>Über uns</title>
	<meta
		name="description"
		content="Lerne die Forsaken Ashbirds kennen – eine erwachsene Gaming-Community mit Fokus auf Teamplay, Respekt und gemeinsame Abenteuer."
	/>
</svelte:head>

<div class="text-column">
	<p class="eyebrow">Wer wir sind</p>
	<h1>Über uns</h1>
	<p class="page-intro">
		Wir sind eine Gaming-Community für Menschen, die zuverlässig zusammenspielen wollen, ohne
		dabei den Spaß und die Leichtigkeit aus den Augen zu verlieren.
	</p>

	<div class="aboutus">
		{#each sections as section, index}
			<TalkTab direction={index % 2 === 0 ? Direction.Left : Direction.Right}>
				<h2>{section.title}</h2>
				<p>{section.text}</p>
			</TalkTab>
		{/each}
	</div>
</div>

<style lang="scss">
	.aboutus {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}
</style>
