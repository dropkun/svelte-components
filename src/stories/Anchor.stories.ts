import type { Meta, StoryObj } from '@storybook/svelte';
import Anchor from '$lib/Anchor.svelte';

const meta = {
    title: 'Anchor',
    component: Anchor,
    tags: ['autodocs'],
} satisfies Meta<Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        href: "test"
    },
};