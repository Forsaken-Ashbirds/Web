import type { Meta, StoryObj } from '@storybook/svelte';

import MemberView from './memberView.svelte';
import MemberLink from '../../models/memberLink.model';

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
		member: {
			name: 'Jane Doe',
			description: 'This is a description of Jane Doe',
			imageUrl: 'https://via.placeholder.com/150',
			links: [
				new MemberLink('https://github.com', 'GitHub'),
				new MemberLink('https://linkedin.com', 'LinkedIn'),
				new MemberLink('https://twitter.com', 'Twitter'),
				new MemberLink('https://facebook.com', 'Facebook'),
				new MemberLink('https://JosunLp.de', 'JosunLp.de')
			]
		}
	}
};
