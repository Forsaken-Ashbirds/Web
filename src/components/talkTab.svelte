<script lang="ts">
	import type { Direction } from '../enums/direction.enum';

	export let direction: Direction;
</script>

<div class="{direction} styleBox">
	<slot />
</div>

<style lang="scss">
	@use '../style/_constants.scss';

	.styleBox {
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: linear-gradient(180deg, rgba(20, 26, 37, 0.94) 0%, rgba(16, 21, 30, 0.82) 100%);
		padding: 1.4rem;
		margin: 1rem 0;
		width: min(100%, 42rem);
		text-align: left;
		cursor: default;
		border-radius: 1rem;
		box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.28);
		transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
		user-select: text;
		backdrop-filter: blur(16px);
		line-height: 1.7;
	}

	.styleBox :global(h2) {
		margin: 0 0 0.75rem;
		color: var(--color-heading);
	}

	.styleBox :global(p) {
		margin: 0;
	}

	.leftSwipe {
		align-self: flex-start;

		&:hover {
			transform: translateX(0.45rem) translateY(-0.15rem);
		}
	}

	.rightSwipe {
		align-self: flex-end;

		&:hover {
			transform: translateX(-0.45rem) translateY(-0.15rem);
		}
	}

	.leftSwipe:hover,
	.rightSwipe:hover {
		border-color: rgba(255, 167, 38, 0.38);
	}
</style>
