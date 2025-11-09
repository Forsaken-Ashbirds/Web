<script lang="ts">
	import { locale as localeStore, translate, type Locale } from '$lib/i18n';
	import sections from '../../data/impressum';

	const pageTitle = translate('impressum.meta.title');
	const pageDescription = translate('impressum.meta.description');
	const heading = translate('impressum.heading');
	const sourceLinkLabel = translate('impressum.sections.source.linkLabel');

	let currentLocale: Locale = $localeStore;

	$: currentLocale = $localeStore;
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content={$pageDescription} />
</svelte:head>

<div class="text-column">
	<h1>{$heading}</h1>

	{#each sections as section (section.id)}
		<section class="legal-section">
			<h2>{section.getTitle(currentLocale)}</h2>
			{#if section.id === 'contact'}
				{#each section.getParagraphs(currentLocale) as paragraph, index (index)}
					{@const [label, value] = paragraph.split(':')}
					<p>
						{label}:
						{' '}
						<a href={`mailto:${value.trim()}`}>{value.trim()}</a>
					</p>
				{/each}
			{:else}
				{#each section.getParagraphs(currentLocale) as paragraph, paragraphIndex (paragraphIndex)}
					{@const lines = paragraph.split('\n')}
					<p>
						{#each lines as line, lineIndex (lineIndex)}
							{line}
							{#if lineIndex < lines.length - 1}
								<br />
							{/if}
						{/each}
						{#if section.id === 'source' && paragraphIndex === 0}
							{' '}
							<a
								href="https://www.e-recht24.de"
								target="_blank"
								rel="noopener noreferrer external"
							>
								{$sourceLinkLabel}
							</a>
						{/if}
					</p>
				{/each}
			{/if}
		</section>
	{/each}
</div>

<style lang="scss">
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		text-align: center;

		h2 {
			margin-top: 2rem;
			font-family: 'Roboto', sans-serif;
			text-decoration: none;
		}
	}

	.legal-section {
		max-width: 40rem;
	}

	.legal-section p {
		font-size: 1rem;
		line-height: 1.6;
	}

	.legal-section a {
		color: inherit;
		text-decoration: underline;
	}
</style>
