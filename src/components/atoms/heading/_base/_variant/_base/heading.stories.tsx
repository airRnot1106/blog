import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          padding: '1rem',
        })}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  render: () => {
    return <Heading as="h1" subtitle="さぶたいとる" title="タイトル1" />;
  },
};

export const H2: Story = {
  render: () => {
    return <Heading as="h2" subtitle="さぶたいとる" title="タイトル2" />;
  },
};

export const H3: Story = {
  render: () => {
    return <Heading as="h3" subtitle="さぶたいとる" title="タイトル3" />;
  },
};

export const H4: Story = {
  render: () => {
    return <Heading as="h4" subtitle="さぶたいとる" title="タイトル4" />;
  },
};

export const H5: Story = {
  render: () => {
    return <Heading as="h5" subtitle="さぶたいとる" title="タイトル5" />;
  },
};

export const H6: Story = {
  render: () => {
    return <Heading as="h6" subtitle="さぶたいとる" title="タイトル6" />;
  },
};
