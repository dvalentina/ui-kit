import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';

import Callout from '.';

const meta = {
  title: 'Molecules/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

const butttonsArray = [<Button label="Button" key="Button" bordered />, <Button label="Action" key="Action" primary />];

export const Large: Story = {
  args: {
    title: 'Callout Title',
    text: 'Supportive text for the callout goes here, which informs and helps users decide what they should do next.',
    buttons: butttonsArray,
  },
};

export const Small: Story = {
  args: {
    text: 'Supportive text for the callout.',
    buttons: butttonsArray,
  },
};
