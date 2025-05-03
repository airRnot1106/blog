import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Atoms/Heading/_Base/Heading',
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
    return <Heading as="h1" subtitle="さぶたいとる" title="タイトル" />;
  },
};

export const H2: Story = {
  render: () => {
    return <Heading as="h2" subtitle="さぶたいとる" title="タイトル" />;
  },
};

export const H3: Story = {
  render: () => {
    return <Heading as="h3" subtitle="さぶたいとる" title="タイトル" />;
  },
};

export const H4: Story = {
  render: () => {
    return <Heading as="h4" subtitle="さぶたいとる" title="タイトル" />;
  },
};

export const H5: Story = {
  render: () => {
    return <Heading as="h5" subtitle="さぶたいとる" title="タイトル" />;
  },
};

export const H6: Story = {
  render: () => {
    return <Heading as="h6" subtitle="さぶたいとる" title="タイトル" />;
  },
};
