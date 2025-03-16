import type { Meta, StoryObj } from '@storybook/react';
import { SiteLayout } from './site-layout';

const meta: Meta<typeof SiteLayout> = {
  title: 'Features/Site/Components/Molecules/SiteLayout',
  component: SiteLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteLayout>;

export const Default: Story = {
  args: {
    children: <div>SiteLayout</div>,
  },
};
