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
		width: 65%;
		text-align: center;
		cursor: wait;
		border-radius: 0.3rem;
		box-shadow: $box-shadow-main;
		transition: all 0.2s ease-in-out;
		@include noSelect;
	}

	.leftSwipe {
		align-self: flex-start;

		&:hover {
			background: rgba(105, 105, 105, 0.74);
			transform: translateX(1.80em) scale(1.4);
		}
	}

	.rightSwipe {
		align-self: flex-end;

		&:hover {
			background: rgba(105, 105, 105, 0.74);
			transform: translateX(-1.80em) scale(1.4);
		}
	}
</style>
