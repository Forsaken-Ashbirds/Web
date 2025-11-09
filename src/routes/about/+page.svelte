<script lang="ts">
	import { locale as localeStore, translate, type Locale } from '$lib/i18n';
	import TalkTab from '../../components/talkTab.svelte';
	import aboutMessages from '../../data/about';

	const pageTitle = translate('about.meta.title');
	const pageDescription = translate('about.meta.description');
	const heading = translate('about.heading');

	let currentLocale: Locale = $localeStore;

	$: currentLocale = $localeStore;
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content={$pageDescription} />
</svelte:head>

<div class="text-column">
	<h1>{$heading}</h1>

	<div class="aboutus">
		{#each aboutMessages as message (message.id)}
			{@const paragraphs = message.getParagraphs(currentLocale)}
			<TalkTab direction={message.direction}>
				{#each paragraphs as paragraph, index (index)}
					<p>{paragraph}</p>
				{/each}
			</TalkTab>
		{/each}
	</div>
</div>

<style lang="scss">
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.aboutus {
		display: flex;
		flex-direction: column;
		min-width: (100% - 2 * 2);
		padding-left: 0;
		padding-right: 0;
	}
</style>
