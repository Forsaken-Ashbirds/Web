<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_REPO_URL } from '$env/static/public';
	import type { Locale, TranslationKey } from '$lib/i18n';
	import {
		availableLocales,
		locale as localeStore,
		setLocale,
		translate,
		translateInstant,
		translateLocaleLabelInstant
	} from '$lib/i18n';
	import logo from '$lib/images/FrsaknAshbirds.svg';
	import github from '$lib/images/github.svg';

	interface NavigationItem {
		href: string;
		path: string;
		labelKey: TranslationKey;
	}

	const navigationConfig: readonly NavigationItem[] = [
		{ href: '/', path: '/', labelKey: 'nav.home' },
		{ href: '/about', path: '/about', labelKey: 'nav.about' },
		{ href: '/community', path: '/community', labelKey: 'nav.community' },
		{ href: '/impressum', path: '/impressum', labelKey: 'nav.impressum' }
	];

	const languageLabel = translate('nav.language.label');
	const languageSwitcherLabel = translate('nav.language.switcherAriaLabel');

	let selectedLocale: Locale = $localeStore;

	let navigationLabels: Record<string, string> = navigationConfig.reduce<Record<string, string>>(
		(accumulator, item) => {
			accumulator[item.path] = translateInstant(item.labelKey);
			return accumulator;
		},
		{}
	);
	let localeOptionLabels: Record<Locale, string> = availableLocales.reduce<
		Record<Locale, string>
	>((accumulator, localeValue) => {
		accumulator[localeValue] = translateLocaleLabelInstant(localeValue);
		return accumulator;
	}, {} as Record<Locale, string>);

	$: selectedLocale = $localeStore;

	$: {
		const currentLocale = $localeStore;
		void currentLocale;
		navigationLabels = navigationConfig.reduce<Record<string, string>>((accumulator, item) => {
			accumulator[item.path] = translateInstant(item.labelKey);
			return accumulator;
		}, {});
		localeOptionLabels = availableLocales.reduce<Record<Locale, string>>(
			(accumulator, localeValue) => {
				accumulator[localeValue] = translateLocaleLabelInstant(localeValue);
				return accumulator;
			},
			{} as Record<Locale, string>
		);
	}

	function handleLocaleChange(event: Event) {
		const target = event.currentTarget as HTMLSelectElement;
		const newLocale = target.value as Locale;
		if (newLocale !== $localeStore) {
			setLocale(newLocale);
		}
	}
</script>

<header>
	<div class="corner">
		<a href="./"><img src={logo} alt="Logo" /></a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			{#each navigationConfig as item}
				<li aria-current={$page.url.pathname === item.path ? 'page' : undefined}>
					<a href={item.href}>{navigationLabels[item.path]}</a>
				</li>
			{/each}
		</ul>
		<div class="language-switcher">
			<label for="language-select">{$languageLabel}</label>
			<select
				id="language-select"
				aria-label={$languageSwitcherLabel}
				on:change={handleLocaleChange}
				bind:value={selectedLocale}
			>
				{#each availableLocales as option}
					<option value={option}>{localeOptionLabels[option]}</option>
				{/each}
			</select>
		</div>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href={PUBLIC_REPO_URL} target="_blank" rel="noopener noreferrer external">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.corner {
		width: 3em;
		height: 3em;
		padding: 1em;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		--background: rgba(255, 255, 255, 0.7);
		height: 3em;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	.language-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0 0.5rem;
	}

	.language-switcher label {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text);
	}

	.language-switcher select {
		background: transparent;
		border: 1px solid var(--color-text);
		color: var(--color-text);
		padding: 0.2rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.7rem;
		cursor: pointer;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
