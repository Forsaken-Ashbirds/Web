import { Locale } from '../../enums/locale.enum';
import { translationService, type TranslationParams } from './translation.service';
import type { TranslationKey } from './translations';

export { Locale };
export type { TranslationKey, TranslationParams };

export const locale = translationService.locale;
export const availableLocales = translationService.availableLocales;

export const setLocale = (value: Locale): void => {
	translationService.setLocale(value);
};

export const translate = (key: TranslationKey, params?: TranslationParams) =>
	translationService.translate(key, params);

export const translateInstant = (key: TranslationKey, params?: TranslationParams) =>
	translationService.instant(key, params);

export const translateLocaleLabel = (value: Locale) =>
	translationService.translateLocaleLabel(value);
export const translateLocaleLabelInstant = (value: Locale) =>
	translationService.instantLocaleLabel(value);
