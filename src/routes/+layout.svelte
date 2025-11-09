<script lang="ts">
	import { PUBLIC_VERSION } from '$env/static/public';
	import { locale as localeStore, translate } from '$lib/i18n';
	import { ClockService, formatTime } from '$lib/time/clock.service';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	import '../style/components/footer.scss';
	import '../style/components/main.scss';
	import '../style/index.scss';
	import Header from './Header.svelte';

	const clockService = new ClockService();
	const currentYear = new Date().getFullYear().toString();

	const footerTeamspeakPrefix = translate('footer.teamspeak.prefix');
	const footerTeamspeakSuffix = translate('footer.teamspeak.suffix');
	const footerTeamspeakLinkLabel = translate('footer.teamspeak.linkLabel');
	const footerCopy = translate('footer.copy', { year: currentYear });
	const footerImprintLabel = translate('footer.imprintLinkLabel');
	const footerVersionLabel = translate('footer.version', { version: PUBLIC_VERSION });
	const footerClockAriaLabel = translate('footer.clockAriaLabel');

	let currentTime = formatTime(new Date());

	onMount(() => {
		AOS.init();

		const clockSubscription = clockService.createClock().subscribe((time) => {
			currentTime = formatTime(time);
		});

		const localeSubscription = localeStore.subscribe((value) => {
			document.documentElement.lang = value;
		});

		return () => {
			clockSubscription();
			localeSubscription();
		};
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			{$footerTeamspeakPrefix}
			{' '}
			<a
				href="ts3server://forsaken-ashbirds"
				target="_blank"
				rel="noopener noreferrer external"
			>
				{$footerTeamspeakLinkLabel}
			</a>
			{' '}
			{$footerTeamspeakSuffix}
		</p>
		<p>
			{$footerCopy}
			<a href="/impressum">{$footerImprintLabel}</a>
		</p>
		<ul id="meta-info" style="display: none">
			<li>{$footerVersionLabel}</li>
		</ul>
		<p aria-label={$footerClockAriaLabel}>{currentTime}</p>
	</footer>
</div>
