import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import imgSrc from '../public/BlueDot_Impact_Logo_White.svg';

const meta = {
  title: 'ui/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Customized: Story = {
  args: {
    logo: imgSrc,
  },
};
