import { derived, get, writable, type Readable, type Writable } from 'svelte/store';
import { Locale } from '../../enums/locale.enum';
import translations, {
	LOCALE_LABEL_TRANSLATION_KEYS,
	type TranslationDictionary,
	type TranslationKey
} from './translations';

/**
 * Runtime parameters that may be interpolated into translation templates.
 */
export type TranslationParams = Record<string, string | number>;

/**
 * Provides reactive translation utilities for Svelte components.
 */
export class TranslationService {
	private readonly dictionary: TranslationDictionary;
	private readonly fallbackLocale: Locale;
	private readonly localeStore: Writable<Locale>;
	private readonly supportedLocales: readonly Locale[];

	public constructor(
		dictionary: TranslationDictionary,
		fallbackLocale: Locale = Locale.English,
		initialLocale: Locale = Locale.German
	) {
		this.dictionary = dictionary;
		this.fallbackLocale = fallbackLocale;
		this.supportedLocales = Object.keys(dictionary) as Locale[];
		this.localeStore = writable(initialLocale);

		if (!this.supportedLocales.includes(fallbackLocale)) {
			throw new Error(
				`Fallback locale "${fallbackLocale}" is not defined within the translation dictionary.`
			);
		}

		if (!this.supportedLocales.includes(initialLocale)) {
			throw new Error(`Initial locale "${initialLocale}" is not available.`);
		}
	}

	/**
	 * Reactive store exposing the currently active locale.
	 */
	public get locale(): Readable<Locale> {
		return { subscribe: this.localeStore.subscribe };
	}

	/**
	 * Available locales derived from the translation dictionary.
	 */
	public get availableLocales(): readonly Locale[] {
		return this.supportedLocales;
	}

	/**
	 * Updates the current locale if it differs from the active one.
	 */
	public setLocale(nextLocale: Locale): void {
		if (!this.supportedLocales.includes(nextLocale)) {
			throw new Error(`Locale "${nextLocale}" is not available.`);
		}

		const currentLocale = get(this.localeStore);
		if (currentLocale !== nextLocale) {
			this.localeStore.set(nextLocale);
		}
	}

	/**
	 * Resolves a translation key to a readable store that reacts to locale changes.
	 */
	public translate(key: TranslationKey, params: TranslationParams = {}): Readable<string> {
		return derived(this.localeStore, (currentLocale) =>
			this.resolve(currentLocale, key, params)
		);
	}

	/**
	 * Resolves a translation key for an immediate, non-reactive usage.
	 */
	public instant(key: TranslationKey, params: TranslationParams = {}): string {
		return this.resolve(get(this.localeStore), key, params);
	}

	/**
	 * Returns a readable translation for a locale display label.
	 */
	public translateLocaleLabel(locale: Locale): Readable<string> {
		const translationKey = LOCALE_LABEL_TRANSLATION_KEYS[locale];
		return this.translate(translationKey);
	}

	/**
	 * Returns the immediate translation for a locale display label.
	 */
	public instantLocaleLabel(locale: Locale): string {
		const translationKey = LOCALE_LABEL_TRANSLATION_KEYS[locale];
		return this.instant(translationKey);
	}

	private resolve(locale: Locale, key: TranslationKey, params: TranslationParams): string {
		const localizedEntries = this.dictionary[locale] ?? this.dictionary[this.fallbackLocale];
		const template = localizedEntries[key] ?? this.dictionary[this.fallbackLocale][key] ?? key;
		return this.applyParams(template, params);
	}

	private applyParams(template: string, params: TranslationParams): string {
		return Object.entries(params).reduce((result, [paramKey, value]) => {
			const pattern = new RegExp(`{${paramKey}}`, 'g');
			return result.replace(pattern, String(value));
		}, template);
	}
}

/**
 * Singleton translation service instance used across the application.
 */
export const translationService = new TranslationService(translations, Locale.English);
