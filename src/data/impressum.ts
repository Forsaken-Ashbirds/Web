import { Locale } from '../enums/locale.enum';
import { LegalSection } from '../models/legalSection.model';

const IMPRESSUM_SECTIONS: readonly LegalSection[] = [
	new LegalSection({
		id: 'legal',
		title: {
			[Locale.German]: 'Angaben gemäß § 5 TMG',
			[Locale.English]: 'Information according to § 5 TMG'
		},
		paragraphs: {
			[Locale.German]: ['Jonas Pfalzgraf\nPostfach 7222\n22831 Norderstedt'],
			[Locale.English]: ['Jonas Pfalzgraf\nP.O. Box 7222\n22831 Norderstedt']
		}
	}),
	new LegalSection({
		id: 'contact',
		title: {
			[Locale.German]: 'Kontakt',
			[Locale.English]: 'Contact'
		},
		paragraphs: {
			[Locale.German]: ['E-Mail: info@josunlp.de'],
			[Locale.English]: ['Email: info@josunlp.de']
		}
	}),
	new LegalSection({
		id: 'source',
		title: {
			[Locale.German]: 'Quelle',
			[Locale.English]: 'Source'
		},
		paragraphs: {
			[Locale.German]: ['Quelle:'],
			[Locale.English]: ['Source:']
		}
	})
];

export default IMPRESSUM_SECTIONS;
