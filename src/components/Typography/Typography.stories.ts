import type { Meta, StoryObj } from '@storybook/react';

import Typography from '.';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// font-style medium

export const Heading1: Story = {
  args: {
    role: 'h1',
    content: 'HeadingH1',
    fontStyle: 'medium',
  },
};

export const Heading2: Story = {
  args: {
    role: 'h2',
    content: 'HeadingH2',
    fontStyle: 'medium',
  },
};

export const Heading3: Story = {
  args: {
    role: 'h3',
    content: 'HeadingH3',
    fontStyle: 'medium',
  },
};

export const Heading4: Story = {
  args: {
    role: 'h4',
    content: 'HeadingH4',
    fontStyle: 'medium',
  },
};

export const Paragraph1: Story = {
  args: {
    role: 'p1',
    content: 'ParagraphX1',
    fontStyle: 'medium',
  },
};

export const Paragraph2: Story = {
  args: {
    role: 'p2',
    content: 'ParagraphX2',
    fontStyle: 'medium',
  },
};

// font-style bold

export const Heading1Bold: Story = {
  args: {
    role: 'h1',
    content: 'HeadingH1',
    fontStyle: 'bold',
  },
};

export const Heading2Bold: Story = {
  args: {
    role: 'h2',
    content: 'HeadingH2',
    fontStyle: 'bold',
  },
};

export const Heading3Bold: Story = {
  args: {
    role: 'h3',
    content: 'HeadingH3',
    fontStyle: 'bold',
  },
};

export const Heading4Bold: Story = {
  args: {
    role: 'h4',
    content: 'HeadingH4',
    fontStyle: 'bold',
  },
};

export const Paragraph1Bold: Story = {
  args: {
    role: 'p1',
    content: 'ParagraphX1',
    fontStyle: 'bold',
  },
};

export const Paragraph2Bold: Story = {
  args: {
    role: 'p2',
    content: 'ParagraphX2',
    fontStyle: 'bold',
  },
};

// font-style italic

export const Heading1Italic: Story = {
  args: {
    role: 'h1',
    content: 'HeadingH1',
    fontStyle: 'italic',
  },
};

export const Heading2Italic: Story = {
  args: {
    role: 'h2',
    content: 'HeadingH2',
    fontStyle: 'italic',
  },
};

export const Heading3Italic: Story = {
  args: {
    role: 'h3',
    content: 'HeadingH3',
    fontStyle: 'italic',
  },
};

export const Heading4Italic: Story = {
  args: {
    role: 'h4',
    content: 'HeadingH4',
    fontStyle: 'italic',
  },
};

export const Paragraph1Italic: Story = {
  args: {
    role: 'p1',
    content: 'ParagraphX1',
    fontStyle: 'italic',
  },
};

export const Paragraph2Italic: Story = {
  args: {
    role: 'p2',
    content: 'ParagraphX2',
    fontStyle: 'italic',
  },
};
