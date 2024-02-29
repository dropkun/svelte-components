import type { Meta, StoryObj } from '@storybook/svelte';
import Circle3 from '$lib/spinner/Circle3.svelte';

const meta = {
  title: 'Circle3',
  component: Circle3,
  tags: ['autodocs'],
} satisfies Meta<Circle3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // ボタンコンポーネントのexport letになっているオブジェクトを登録
  args: {
    Circle3: {
    }
  },
};