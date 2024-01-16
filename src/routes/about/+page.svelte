<script lang="ts">
	import TalkTab from '../../components/talkTab.svelte';
	import { Direction } from '../../enums/direction.enum';
</script>

<svelte:head>
	<title>Über uns</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Über uns</h1>

	<div class="aboutus">
		<TalkTab direction={Direction.Left}>
			Herzlich willkommen bei den Forsaken Ashbirds! Wir sind ein lebendiger Gaming-Clan, der sich
			durch die gemeinsame Leidenschaft für aufregende Abenteuer und unvergessliche Spielerlebnisse
			vereint.
			<br />
			<br />
			Mit einer beeindruckenden Geschichte der Kameradschaft und Exzellenz ziehen wir durch verschiedene
			virtuelle Welten und hinterlassen unsere Spuren auf jedem Schlachtfeld, das wir betreten.
		</TalkTab>

		<TalkTab direction={Direction.Right}>
			Unser Geist des Wettbewerbs, der Teamarbeit und der Innovation treibt uns dazu an, eine
			einladende und mitreißende Gemeinschaft für Spieler aller Hintergründe zu schaffen.
			<br />
			<br />
			Egal, ob wir fantastische Reiche erobern, in intensiven PvP-Kämpfen unsere Gegner herausfordern
			oder uns in fesselnde Geschichten vertiefen, die Forsaken Ashbirds streben immer danach, uns zu
			verbessern und den Sieg zu erringen.
		</TalkTab>

		<TalkTab direction={Direction.Left}>
			Wir laden euch herzlich ein, sich uns anzuschließen und das Potenzial einer vereinten
			Spielgemeinschaft zu entdecken, in der Freundschaften geschmiedet, Fähigkeiten verfeinert und
			unvergessliche Erinnerungen geschaffen werden.<br />
			<br /> Gemeinsam werden wir die Grenzen der virtuellen Welt überwinden und ein Vermächtnis schaffen,
			das noch Generationen in Erinnerung behalten werden. Werde Teil der Forsaken Ashbirds und erlebe
			Gaming auf einer neuen, entspannten Ebene.
		</TalkTab>

		<TalkTab direction={Direction.Right}>
			Unsere Community ist für alle Spieler ab 18 Jahren offen. Wir sind ein deutsch/englisch
			sprachiger Clan, aber auch Spieler aus anderen Ländern sind bei uns herzlich willkommen. Wir
			sind ein Community-Clan, der sich auf das gemeinsame Spielen konzentriert.<br />
			<br /> Wir sind keine professionelle E-Sport-Organisation und haben auch nicht vor, eine zu werden.
			Wir sind ein Clan, der sich auf das gemeinsame Spielen konzentriert.
		</TalkTab>
	</div>
</div>

<style lang="scss">
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.aboutus {
		display: flex;
		flex-direction: column;
		min-width: (100% - 2 * 2);
		padding-left: 0;
		padding-right: 0;
	}
</style>
