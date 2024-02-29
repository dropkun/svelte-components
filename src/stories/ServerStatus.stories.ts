import type { Meta, StoryObj } from '@storybook/svelte';
import ServerStatus from '$lib/ServerStatus.svelte';

const meta = {
    title: 'ServerStatus',
    component: ServerStatus,
    tags: ['autodocs'],
} satisfies Meta<ServerStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        status: "PENDING",
    },
};

export const Running: Story = {
    args: {
        status: "RUNNING",
    },
};

export const Terminated: Story = {
    args: {
        status: "TERMINATED",
    },
};
