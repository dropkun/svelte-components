import type { Meta, StoryObj } from '@storybook/svelte';
import Navigator from '$lib/Navigator.svelte';

const meta = {
    title: 'Navigator',
    component: Navigator,
    tags: ['autodocs'],
} satisfies Meta<Navigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    // ボタンコンポーネントのexport letになっているオブジェクトを登録
    args: {
    },
};