import { Locale } from '../enums/locale.enum';
import Member from '../models/member.model';
import MemberLink from '../models/memberLink.model';

const MEMBERS: readonly Member[] = [
	new Member({
		name: 'JosunLP',
		biography: {
			[Locale.German]: 'Gründer und Lead Developer. Liebt Svelte und Open Source.',
			[Locale.English]: 'Founder and lead developer. Loves Svelte and open source.'
		},
		imageUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
		links: [
			new MemberLink({ url: 'https://github.com/JosunLP', title: 'GitHub' }),
			new MemberLink({ url: 'https://twitter.com/JosunLP', title: 'Twitter' }),
			new MemberLink({ url: 'https://josunlp.de', title: 'Website' })
		]
	})
];

export default MEMBERS;
