import { Direction } from '../enums/direction.enum';
import { Locale } from '../enums/locale.enum';
import { ConversationMessage } from '../models/conversationMessage.model';

const ABOUT_MESSAGES: readonly ConversationMessage[] = [
	new ConversationMessage({
		id: 'welcome',
		direction: Direction.Left,
		paragraphs: {
			[Locale.German]: [
				'Herzlich willkommen bei den Forsaken Ashbirds! Wir sind ein lebendiger Gaming-Clan, der sich durch die gemeinsame Leidenschaft für aufregende Abenteuer und unvergessliche Spielerlebnisse vereint.',
				'Mit einer beeindruckenden Geschichte der Kameradschaft und Exzellenz ziehen wir durch verschiedene virtuelle Welten und hinterlassen unsere Spuren auf jedem Schlachtfeld, das wir betreten.'
			],
			[Locale.English]: [
				'Welcome to the Forsaken Ashbirds! We are a vibrant gaming clan united by a shared passion for thrilling adventures and unforgettable experiences.',
				'With an impressive history of camaraderie and excellence, we journey through diverse virtual worlds and leave our mark on every battlefield we enter.'
			]
		}
	}),
	new ConversationMessage({
		id: 'community',
		direction: Direction.Right,
		paragraphs: {
			[Locale.German]: [
				'Unser Geist des Wettbewerbs, der Teamarbeit und der Innovation treibt uns dazu an, eine einladende und mitreißende Gemeinschaft für Spieler aller Hintergründe zu schaffen.',
				'Egal, ob wir fantastische Reiche erobern, in intensiven PvP-Kämpfen unsere Gegner herausfordern oder uns in fesselnde Geschichten vertiefen, die Forsaken Ashbirds streben immer danach, uns zu verbessern und den Sieg zu erringen.'
			],
			[Locale.English]: [
				'Our spirit of competition, teamwork, and innovation drives us to build a welcoming and inspiring community for players of every background.',
				'Whether we conquer fantastic realms, challenge rivals in intense PvP battles, or dive into captivating stories, the Forsaken Ashbirds always strive to grow and achieve victory together.'
			]
		}
	}),
	new ConversationMessage({
		id: 'invitation',
		direction: Direction.Left,
		paragraphs: {
			[Locale.German]: [
				'Wir laden euch herzlich ein, euch uns anzuschließen und das Potenzial einer vereinten Spielgemeinschaft zu entdecken, in der Freundschaften geschmiedet, Fähigkeiten verfeinert und unvergessliche Erinnerungen geschaffen werden.',
				'Gemeinsam werden wir die Grenzen der virtuellen Welt überwinden und ein Vermächtnis schaffen, das noch Generationen in Erinnerung behalten werden. Werde Teil der Forsaken Ashbirds und erlebe Gaming auf einer neuen, entspannten Ebene.'
			],
			[Locale.English]: [
				'We warmly invite you to join us and experience the potential of a united gaming community where friendships are forged, skills are refined, and unforgettable memories are created.',
				'Together we will push the limits of virtual worlds and build a legacy that future generations will remember. Become part of the Forsaken Ashbirds and enjoy gaming in a new, relaxed way.'
			]
		}
	}),
	new ConversationMessage({
		id: 'openness',
		direction: Direction.Right,
		paragraphs: {
			[Locale.German]: [
				'Unsere Community ist für alle Spieler ab 18 Jahren offen. Wir sind ein deutsch/englisch sprachiger Clan, aber auch Spieler aus anderen Ländern sind bei uns herzlich willkommen. Wir sind ein Community-Clan, der sich auf das gemeinsame Spielen konzentriert.',
				'Wir sind keine professionelle E-Sport-Organisation und haben auch nicht vor, eine zu werden. Wir konzentrieren uns auf das gemeinsame Erlebnis und eine respektvolle Atmosphäre.'
			],
			[Locale.English]: [
				'Our community is open to all players aged 18 and above. We primarily communicate in German and English, yet players from other countries are warmly welcome. We are a community clan focused on playing together.',
				'We are not a professional esports organisation, nor do we aim to become one. Our focus lies on shared experiences and a respectful atmosphere.'
			]
		}
	})
];

export default ABOUT_MESSAGES;
