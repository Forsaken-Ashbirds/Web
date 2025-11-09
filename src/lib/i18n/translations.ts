import { Locale } from '../../enums/locale.enum';

/**
 * Shape of the complete translation dictionary.
 */
export type TranslationDictionary = Record<Locale, Record<string, string>>;

const translations = {
	[Locale.English]: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.community': 'Community',
		'nav.impressum': 'Imprint',
		'nav.language.label': 'Language',
		'nav.language.switcherAriaLabel': 'Select site language',
		'locale.de': 'German',
		'locale.en': 'English',
		'home.meta.title': 'Forsaken Ashbirds',
		'home.meta.description': 'Official website of the Forsaken Ashbirds gaming community.',
		'home.heading': 'Welcome to the Forsaken Ashbirds!',
		'home.hero.subtitle': 'We explore game worlds together and share unforgettable adventures.',
		'about.meta.title': 'About Us',
		'about.meta.description': 'Learn more about the Forsaken Ashbirds community.',
		'about.heading': 'About Us',
		'community.meta.title': 'Community',
		'community.meta.description': 'Get to know the members of the Forsaken Ashbirds.',
		'community.heading': 'Community',
		'community.subheading': 'Our Members',
		'member.card.ariaLabel': 'Member profile for {name}',
		'member.card.profileLinksLabel': 'Profile links',
		'member.card.profileImageAlt': 'Profile image of {name}',
		'member.card.profileLinkAriaLabel': 'Open {title} profile of {name}',
		'footer.teamspeak.prefix': 'Visit',
		'footer.teamspeak.suffix': 'to join our TeamSpeak server.',
		'footer.teamspeak.linkLabel': 'forsaken-ashbirds',
		'footer.copy': '© {year} Forsaken Ashbirds |',
		'footer.imprintLinkLabel': 'Imprint',
		'footer.version': 'Version: {version}',
		'footer.clockAriaLabel': 'Local time',
		'impressum.meta.title': 'Imprint',
		'impressum.meta.description': 'Legal information about Forsaken Ashbirds.',
		'impressum.heading': 'Imprint',
		'impressum.sections.legal.title': 'Information according to § 5 TMG',
		'impressum.sections.contact.title': 'Contact',
		'impressum.sections.source.title': 'Source',
		'impressum.sections.source.linkLabel': 'eRecht24'
	},
	[Locale.German]: {
		'nav.home': 'Startseite',
		'nav.about': 'Über uns',
		'nav.community': 'Community',
		'nav.impressum': 'Impressum',
		'nav.language.label': 'Sprache',
		'nav.language.switcherAriaLabel': 'Sprache der Seite auswählen',
		'locale.de': 'Deutsch',
		'locale.en': 'Englisch',
		'home.meta.title': 'Forsaken Ashbirds',
		'home.meta.description': 'Offizielle Webseite der Forsaken Ashbirds Gaming-Community.',
		'home.heading': 'Willkommen bei den Forsaken Ashbirds!',
		'home.hero.subtitle':
			'Wir entdecken gemeinsam Spielwelten und teilen unvergessliche Abenteuer.',
		'about.meta.title': 'Über uns',
		'about.meta.description': 'Lerne die Community der Forsaken Ashbirds kennen.',
		'about.heading': 'Über uns',
		'community.meta.title': 'Community',
		'community.meta.description': 'Lerne die Mitglieder der Forsaken Ashbirds kennen.',
		'community.heading': 'Community',
		'community.subheading': 'Unsere Mitglieder',
		'member.card.ariaLabel': 'Mitgliedsprofil von {name}',
		'member.card.profileLinksLabel': 'Profil-Links',
		'member.card.profileImageAlt': 'Profilbild von {name}',
		'member.card.profileLinkAriaLabel': 'Öffne das {title}-Profil von {name}',
		'footer.teamspeak.prefix': 'Besuche',
		'footer.teamspeak.suffix': 'um unserem TeamSpeak-Server beizutreten.',
		'footer.teamspeak.linkLabel': 'forsaken-ashbirds',
		'footer.copy': '© {year} Forsaken Ashbirds |',
		'footer.imprintLinkLabel': 'Impressum',
		'footer.version': 'Version: {version}',
		'footer.clockAriaLabel': 'Aktuelle Zeit',
		'impressum.meta.title': 'Impressum',
		'impressum.meta.description': 'Rechtliche Informationen zu den Forsaken Ashbirds.',
		'impressum.heading': 'Impressum',
		'impressum.sections.legal.title': 'Angaben gemäß § 5 TMG',
		'impressum.sections.contact.title': 'Kontakt',
		'impressum.sections.source.title': 'Quelle',
		'impressum.sections.source.linkLabel': 'eRecht24'
	}
} as const satisfies TranslationDictionary;

export type TranslationKey = keyof (typeof translations)[Locale.English];
export type LocaleLabelKey = Extract<TranslationKey, `locale.${string}`>;

export const LOCALE_LABEL_TRANSLATION_KEYS: Record<Locale, LocaleLabelKey> = {
	[Locale.English]: 'locale.en',
	[Locale.German]: 'locale.de'
};

export default translations;
