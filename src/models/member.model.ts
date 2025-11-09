import { Locale } from '../enums/locale.enum';
import type { LocalizedText } from '../types/localizedText.type';
import type MemberLink from './memberLink.model';

/**
 * Constructor options for {@link Member} instances.
 */
export interface MemberProps {
	name: string;
	biography: LocalizedText;
	imageUrl: string;
	links: MemberLink[];
}

/**
 * Represents a member of the Forsaken Ashbirds community.
 */
export default class Member {
	public readonly name: string;
	public readonly imageUrl: string;
	public readonly links: readonly MemberLink[];
	private readonly biography: LocalizedText;

	public constructor({ name, biography, imageUrl, links }: MemberProps) {
		this.name = name;
		this.imageUrl = imageUrl;
		this.links = links;
		this.biography = biography;
	}

	/**
	 * Returns the localized member biography.
	 */
	public getBiography(locale: Locale, fallback: Locale = Locale.English): string {
		return this.biography[locale] ?? this.biography[fallback] ?? '';
	}
}
