<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/FrsaknAshbirds.svg';
	import github from '$lib/images/github.svg';
	import { PUBLIC_REPO_URL } from '$env/static/public';
</script>

<header>
	<div class="corner">
		<a href="/" aria-label="Zur Startseite">
			<img src={logo} alt="Logo der Forsaken Ashbirds" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">Über uns</a>
			</li>
			<li aria-current={$page.url.pathname === '/community' ? 'page' : undefined}>
				<a href="/community">Community</a>
			</li>
			<li aria-current={$page.url.pathname === '/impressum' ? 'page' : undefined}>
				<a href="/impressum">Impressum</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a
			href={PUBLIC_REPO_URL}
			target="_blank"
			rel="noopener noreferrer external"
			aria-label="GitHub Repository öffnen"
		>
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		padding: 1rem clamp(1rem, 3vw, 2rem);
		box-sizing: border-box;
	}

	.corner {
		width: 4rem;
		height: 4rem;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			border-radius: 999px;
			background: rgba(12, 16, 24, 0.76);
			border: 1px solid rgba(255, 255, 255, 0.12);
			backdrop-filter: blur(16px);
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
			transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
		}

		img {
			width: 2.3rem;
			height: 2.3rem;
			object-fit: contain;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(12, 16, 24, 0.8);
		--accent: rgba(255, 167, 38, 0.18);
		min-height: 3.5rem;
		backdrop-filter: blur(18px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 999px;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18);
	}

	svg {
		width: 2em;
		height: 3.5em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		border-radius: 999px;
		padding-inline: 0.35rem;
	}

	li {
		position: relative;
		height: calc(100% - 0.7rem);
		display: flex;
		align-items: center;
	}

	li[aria-current='page']::before {
		content: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0.6rem 1rem;
		color: rgba(243, 246, 252, 0.88);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		border-radius: 999px;
		transition: color 0.2s linear, background 0.2s ease, transform 0.2s ease;
	}

	li[aria-current='page'] a {
		background: var(--accent);
		color: var(--color-heading);
	}

	a:hover,
	a:focus-visible {
		color: var(--color-heading);
		background: rgba(255, 255, 255, 0.08);
		text-decoration: none;
	}

	.corner a:hover,
	.corner a:focus-visible {
		transform: translateY(-2px);
		border-color: rgba(255, 255, 255, 0.22);
		background: rgba(18, 24, 36, 0.92);
	}

	@media (max-width: 720px) {
		header {
			flex-direction: column;
		}

		.corner {
			width: 3.5rem;
			height: 3.5rem;
		}

		nav {
			width: 100%;
			overflow-x: auto;
		}

		ul {
			width: 100%;
			justify-content: center;
		}
	}
</style>
