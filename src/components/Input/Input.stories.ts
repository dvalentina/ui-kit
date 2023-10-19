import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Success: Story = {
  args: {
    label: 'Label',
    status: 'success',
    message: 'Validation success message',
    placeholder: 'Placeholder',
  },
};

export const Warning: Story = {
  args: {
    label: 'Label',
    status: 'warning',
    message: 'Validation warning message',
    placeholder: 'Placeholder',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    status: 'error',
    message: 'Validation error message',
    placeholder: 'Placeholder',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};
