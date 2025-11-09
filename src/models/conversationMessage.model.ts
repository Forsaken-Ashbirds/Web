import { Direction } from '../enums/direction.enum';
import { Locale } from '../enums/locale.enum';
import type { LocalizedTextCollection } from '../types/localizedText.type';

/**
 * Constructor parameters for {@link ConversationMessage}.
 */
export interface ConversationMessageProps {
	id: string;
	direction: Direction;
	paragraphs: LocalizedTextCollection;
}

/**
 * Represents a conversational block within the about page.
 */
export class ConversationMessage {
	public readonly id: string;
	public readonly direction: Direction;
	private readonly paragraphs: LocalizedTextCollection;

	public constructor({ id, direction, paragraphs }: ConversationMessageProps) {
		this.id = id;
		this.direction = direction;
		this.paragraphs = paragraphs;
	}

	/**
	 * Returns the localized paragraphs for the provided locale.
	 */
	public getParagraphs(locale: Locale, fallback: Locale = Locale.English): string[] {
		return this.paragraphs[locale] ?? this.paragraphs[fallback] ?? [];
	}
}
