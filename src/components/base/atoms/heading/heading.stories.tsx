import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Base/Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h1',
  },
};

export const H2: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h2',
  },
};

export const H3: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h3',
  },
};

export const H4: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h4',
  },
};

export const H5: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h5',
  },
};

export const H6: Story = {
  args: {
    title: 'タイトル',
    subtitle: 'たいとる',
    as: 'h6',
  },
};
