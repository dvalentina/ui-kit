import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Bordered: Story = {
  args: {
    label: 'Button',
    bordered: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Button',
    error: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small button',
  },
};
