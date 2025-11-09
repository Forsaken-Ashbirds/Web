import { Locale } from '../enums/locale.enum';
import type { LocalizedText, LocalizedTextCollection } from '../types/localizedText.type';

/**
 * Constructor options for {@link LegalSection} instances.
 */
export interface LegalSectionProps {
	id: string;
	title: LocalizedText;
	paragraphs: LocalizedTextCollection;
}

/**
 * Represents a legal section displayed on the imprint page.
 */
export class LegalSection {
	public readonly id: string;
	private readonly title: LocalizedText;
	private readonly paragraphs: LocalizedTextCollection;

	public constructor({ id, title, paragraphs }: LegalSectionProps) {
		this.id = id;
		this.title = title;
		this.paragraphs = paragraphs;
	}

	/**
	 * Returns the localized section title.
	 */
	public getTitle(locale: Locale, fallback: Locale = Locale.English): string {
		return this.title[locale] ?? this.title[fallback] ?? '';
	}

	/**
	 * Returns the localized section paragraphs.
	 */
	public getParagraphs(locale: Locale, fallback: Locale = Locale.English): string[] {
		return this.paragraphs[locale] ?? this.paragraphs[fallback] ?? [];
	}
}
