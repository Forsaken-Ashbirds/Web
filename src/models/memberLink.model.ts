import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export default class MemberLink {
	public url: string;
	public title: string;
	public icon: IconProp;

	constructor(url: string, title: string, icon?: IconProp) {
		this.url = url;
		this.title = title;
		this.icon = icon || this.setIcon(url);
	}

	private setIcon(domain: string): IconProp {
		const basedomain = domain.split('.').slice(-2).join('.').toLocaleLowerCase();
		switch (basedomain) {
			case 'github.com':
				return ['fab', 'github'];
			case 'linkedin.com':
				return ['fab', 'linkedin'];
			case 'twitter.com':
				return ['fab', 'twitter'];
			case 'facebook.com':
				return ['fab', 'facebook'];
			case 'instagram.com':
				return ['fab', 'instagram'];
			case 'youtube.com':
				return ['fab', 'youtube'];
			case 'twitch.tv':
				return ['fab', 'twitch'];
			case 'discord.com':
				return ['fab', 'discord'];
			case 'reddit.com':
				return ['fab', 'reddit'];
			case 'pinterest.com':
				return ['fab', 'pinterest'];
			case 'tiktok.com':
				return ['fab', 'tiktok'];
			case 'xing.com':
				return ['fab', 'xing'];
			case 'steamcommunity.com':
				return ['fab', 'steam'];
			default:
				return ['fas', 'link'];		
		}
		return 'link';
	}
}