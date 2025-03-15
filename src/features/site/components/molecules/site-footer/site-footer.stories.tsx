import type { Meta, StoryObj } from '@storybook/react';
import { SiteFooter } from './site-footer';

const meta: Meta<typeof SiteFooter> = {
  title: 'Features/Site/Components/Molecules/SiteFooter',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="mt-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
