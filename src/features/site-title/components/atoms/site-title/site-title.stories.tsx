import type { Meta, StoryObj } from '@storybook/react';
import { SiteTitle } from './site-title';

const meta: Meta<typeof SiteTitle> = {
  title: 'Features/SiteTitle/Components/Atoms/SiteTitle',
  component: SiteTitle,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteTitle>;

export const Default: Story = {
  args: {
    title: 'airRnot.dev',
    subtitle: "airRnot's blog",
  },
};
