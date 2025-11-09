<script lang="ts">
	import { translate } from '$lib/i18n';
	import MemberView from '../../components/memberView/memberView.svelte';
	import MEMBERS from '../../data/members';

	const pageTitle = translate('community.meta.title');
	const pageDescription = translate('community.meta.description');
	const heading = translate('community.heading');
	const subheading = translate('community.subheading');
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content={$pageDescription} />
</svelte:head>

<div class="community-page">
	<h1>{$heading}</h1>
	<h2>{$subheading}</h2>
	<div class="members-list" role="list">
		{#each MEMBERS as member (member.name)}
			<div role="listitem">
				<MemberView {member} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.community-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		text-align: center;
		padding: 2rem;
	}
	.members-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		margin-top: 2rem;
	}
</style>
