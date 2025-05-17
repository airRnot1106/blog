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
    return (
      <Heading as="h1" size="clamp" subtitle="さぶたいとる" title="タイトル1" />
    );
  },
};

export const H2: Story = {
  render: () => {
    return (
      <Heading as="h2" size="clamp" subtitle="さぶたいとる" title="タイトル2" />
    );
  },
};

export const H3: Story = {
  render: () => {
    return (
      <Heading as="h3" size="clamp" subtitle="さぶたいとる" title="タイトル3" />
    );
  },
};

export const H4: Story = {
  render: () => {
    return (
      <Heading as="h4" size="clamp" subtitle="さぶたいとる" title="タイトル4" />
    );
  },
};

export const H5: Story = {
  render: () => {
    return (
      <Heading as="h5" size="clamp" subtitle="さぶたいとる" title="タイトル5" />
    );
  },
};

export const H6: Story = {
  render: () => {
    return (
      <Heading as="h6" size="clamp" subtitle="さぶたいとる" title="タイトル6" />
    );
  },
};

export const XL: Story = {
  render: () => {
    return (
      <Heading as="h1" size="xl" subtitle="さぶたいとる" title="タイトル1" />
    );
  },
};

export const LG: Story = {
  render: () => {
    return (
      <Heading as="h1" size="lg" subtitle="さぶたいとる" title="タイトル1" />
    );
  },
};

export const MD: Story = {
  render: () => {
    return (
      <Heading as="h1" size="md" subtitle="さぶたいとる" title="タイトル1" />
    );
  },
};

export const SM: Story = {
  render: () => {
    return (
      <Heading as="h1" size="sm" subtitle="さぶたいとる" title="タイトル1" />
    );
  },
};
