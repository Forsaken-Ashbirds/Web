<script lang="ts">
	import { locale as localeStore, translateInstant } from '$lib/i18n';
	import { dom, library } from '@fortawesome/fontawesome-svg-core';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type Member from '../../models/member.model';

	library.add(fab, fas);
	dom.watch();

	export let member: Member;

	let currentLocale = $localeStore;
	let biography = member.getBiography(currentLocale);
	let cardLabel = translateInstant('member.card.ariaLabel', { name: member.name });
	let linksLabel = translateInstant('member.card.profileLinksLabel');
	let profileImageAlt = translateInstant('member.card.profileImageAlt', { name: member.name });
	let linkLabels = member.links.map((link) =>
		translateInstant('member.card.profileLinkAriaLabel', {
			name: member.name,
			title: link.title
		})
	);

	$: {
		currentLocale = $localeStore;
		biography = member.getBiography(currentLocale);
		cardLabel = translateInstant('member.card.ariaLabel', { name: member.name });
		linksLabel = translateInstant('member.card.profileLinksLabel');
		profileImageAlt = translateInstant('member.card.profileImageAlt', { name: member.name });
		linkLabels = member.links.map((link) =>
			translateInstant('member.card.profileLinkAriaLabel', {
				name: member.name,
				title: link.title
			})
		);
	}
</script>

<div class="memberView" aria-label={cardLabel} role="region">
	<img src={member.imageUrl} alt={profileImageAlt} aria-label={profileImageAlt} />
	<h2>{member.name}</h2>
	<p>{biography}</p>
	<ul class="profileLinks" aria-label={linksLabel} role="list">
		{#each member.links as link, index (link.url)}
			<li>
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer external"
					aria-label={linkLabels[index]}
				>
					<FontAwesomeIcon icon={link.icon} />
					<span>{link.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="sass">

	.memberView
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		font-size: 1.2rem
		text-align: center
		border: 0.14rem solid gray
		border-radius: 2rem
		padding: 1rem
		margin: 1rem
		max-width: 30rem
		font-family: 'Roboto', sans-serif

		img
			width: 7em
			height: 7em
			border-radius: 50%
			margin-bottom: 1rem

		h2
			margin-top: 1rem
			font-family: 'Roboto', sans-serif
			text-decoration: none

		.profileLinks
			display: flex
			flex-direction: row
			align-items: center
			flex-wrap: wrap
			justify-content: center
			margin: 1rem
			list-style: none
			padding: 0

			li
				margin: 0.2rem

				a
					display: flex
					align-items: center
					justify-content: center
					text-decoration: none
					color: black
					gap: 0.5rem
					padding: 0.4rem 0.8rem
					border-radius: 0.5rem
					border: 0.1rem solid transparent

					&:hover
						color: blue
						border-color: blue


</style>
