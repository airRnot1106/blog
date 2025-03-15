import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from './site-header';

const meta: Meta<typeof SiteHeader> = {
  title: 'Features/Site/Components/Molecules/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};
