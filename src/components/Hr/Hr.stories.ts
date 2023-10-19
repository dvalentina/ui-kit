import type { Meta, StoryObj } from '@storybook/react';

import Hr from '.';

const meta = {
  title: 'Atoms/Hr',
  component: Hr,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '400px',
  },
};
