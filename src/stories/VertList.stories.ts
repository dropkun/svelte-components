import type { Meta, StoryObj } from '@storybook/svelte';
import VertList from '$lib/VertList.svelte';

const meta = {
    title: 'VertList',
    component: VertList,
    tags: ['autodocs'],
} satisfies Meta<VertList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    // ボタンコンポーネントのexport letになっているオブジェクトを登録
    args: {
    },
};