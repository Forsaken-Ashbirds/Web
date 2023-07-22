<script lang="ts">
	import type { Direction } from '../enums/direction.enum';

	export let direction: Direction;
</script>

<div class="{direction} styleBox">
	<slot />
</div>

<style lang="scss">
	@import '../style/_constants.scss';

	.styleBox {
		border: none;
		background: rgba(255, 255, 255, 0.425);
		padding: 1rem;
		margin: 1rem;
		width: 70%;
		border-radius: 0.5rem;
		box-shadow: $box-shadow-main;
	}

	.leftSwipe {
		margin-right: 1em;
		text-align: left;
		float: left;
		align-self: flex-start;
	}

	.rightSwipe {
		margin-left: 1em;
		text-align: right;
		align-self: flex-end;
	}
</style>
