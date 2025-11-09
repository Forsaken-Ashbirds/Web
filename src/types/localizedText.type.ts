/**
 * Commonly used localized text container types.
 */
import type { Locale } from '../enums/locale.enum';

/**
 * A type-safe representation of localized single-line text content.
 */
export type LocalizedText = Record<Locale, string>;

/**
 * A type-safe representation of localized multi-paragraph content.
 */
export type LocalizedTextCollection = Record<Locale, string[]>;
