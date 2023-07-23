<script lang="ts">
	import type { Direction } from '../enums/direction.enum';

	export let direction: Direction;
</script>

<div class="{direction} styleBox">
	<slot />
</div>

<style lang="scss">
	@import '../style/_constants.scss';
	@import '../style/mixins/_mixins.scss';

	.styleBox {
		border: none;
		background: rgba(153, 153, 153, 0.74);
		padding: 1rem;
		margin: 1rem;
		width: 70%;
		border-radius: 0.5rem;
		box-shadow: $box-shadow-main;
		transition: all 0.2s ease-in-out;
		@include noSelect;
	}

	.leftSwipe {
		margin-right: 1em;
		margin-left: 0;
		text-align: left;
		float: left;
		align-self: flex-start;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;

		&:hover {
			background: rgba(153, 153, 153, 0.74);
			transform: translateX(1.80em) scale(1.1);
		}
	}

	.rightSwipe {
		margin-left: 1em;
		margin-right: 0;
		text-align: right;
		align-self: flex-end;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		
		&:hover {
			background: rgba(153, 153, 153, 0.74);
			transform: translateX(-1.80em) scale(1.1);
		}
	}
</style>
