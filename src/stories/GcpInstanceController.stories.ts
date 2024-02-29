import type { Meta, StoryObj } from '@storybook/svelte';
import GcpInstanceController from '$lib/GcpInstanceController.svelte';

const meta = {
    title: 'GcpInstanceController',
    component: GcpInstanceController,
    tags: ['autodocs'],
} satisfies Meta<GcpInstanceController>;

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
