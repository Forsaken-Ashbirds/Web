import type { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Constructor parameters for {@link MemberLink}.
 */
export interface MemberLinkProps {
	url: string;
	title: string;
	icon?: IconProp;
}

/**
 * Represents an external profile link for a community member.
 */
export default class MemberLink {
	private static readonly DEFAULT_ICON: IconProp = ['fas', 'link'];
	private static readonly ICON_MAP: Record<string, IconProp> = {
		'github.com': ['fab', 'github'],
		'linkedin.com': ['fab', 'linkedin'],
		'twitter.com': ['fab', 'twitter'],
		'x.com': ['fab', 'twitter'],
		'facebook.com': ['fab', 'facebook'],
		'instagram.com': ['fab', 'instagram'],
		'youtube.com': ['fab', 'youtube'],
		'twitch.tv': ['fab', 'twitch'],
		'discord.com': ['fab', 'discord'],
		'reddit.com': ['fab', 'reddit'],
		'pinterest.com': ['fab', 'pinterest'],
		'tiktok.com': ['fab', 'tiktok'],
		'xing.com': ['fab', 'xing'],
		'steamcommunity.com': ['fab', 'steam']
	};

	public readonly url: string;
	public readonly title: string;
	public readonly icon: IconProp;

	public constructor({ url, title, icon }: MemberLinkProps) {
		this.url = url;
		this.title = title;
		this.icon = icon ?? MemberLink.deriveIcon(url);
	}

	private static deriveIcon(url: string): IconProp {
		const hostname = MemberLink.extractHostname(url);
		if (!hostname) {
			return MemberLink.DEFAULT_ICON;
		}

		const domainSegments = hostname.split('.');
		const baseDomain = domainSegments.slice(-2).join('.');
		return MemberLink.ICON_MAP[baseDomain] ?? MemberLink.DEFAULT_ICON;
	}

	private static extractHostname(url: string): string | null {
		try {
			return new URL(url).hostname.toLowerCase();
		} catch (error) {
			console.warn('Invalid URL supplied for member link icon inference:', url, error);
			return null;
		}
	}
}
