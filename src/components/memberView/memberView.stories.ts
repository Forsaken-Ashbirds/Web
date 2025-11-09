import type { Meta, StoryObj } from '@storybook/svelte';

import { Locale } from '../../enums/locale.enum';
import Member from '../../models/member.model';
import MemberLink from '../../models/memberLink.model';
import MemberView from './memberView.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'FAB/MemberView',
	component: MemberView,
	tags: ['autodocs'],
	argTypes: {
		member: { control: 'object' }
	}
} satisfies Meta<MemberView>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const JaneDoe: Story = {
	args: {
		member: new Member({
			name: 'Jane Doe',
			biography: {
				[Locale.German]: 'Dies ist eine Beispielbeschreibung von Jane Doe.',
				[Locale.English]: 'This is a sample description of Jane Doe.'
			},
			imageUrl: 'https://via.placeholder.com/150',
			links: [
				new MemberLink({ url: 'https://github.com', title: 'GitHub' }),
				new MemberLink({ url: 'https://linkedin.com', title: 'LinkedIn' }),
				new MemberLink({ url: 'https://twitter.com', title: 'Twitter' }),
				new MemberLink({ url: 'https://facebook.com', title: 'Facebook' }),
				new MemberLink({ url: 'https://josunlp.de', title: 'JosunLp.de' })
			]
		})
	}
};
