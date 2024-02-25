<script lang="ts">
	import { library, dom } from '@fortawesome/fontawesome-svg-core';
	import {faB} from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type Member from '../../models/member.model';

	library.add(faB);
	dom.watch();

	export let member: Member;
</script>

<div class="memberView">
	<img src={member.imageUrl} alt="Member Icon" />
	<h2>{member.name}</h2>
	<p>{member.description}</p>
	<div class="profileLinks">
		{#each member.links as link}
			<a href={link.url} target="_blank"><FontAwesomeIcon icon={link.icon} />{link.title}</a>
		{/each}
	</div>
</div>

<style lang="sass">

</style>
