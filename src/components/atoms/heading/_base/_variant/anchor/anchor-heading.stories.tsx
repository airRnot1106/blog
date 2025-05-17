import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { AnchorHeading } from './anchor-heading';

const meta: Meta<typeof AnchorHeading> = {
  component: AnchorHeading,
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

type Story = StoryObj<typeof AnchorHeading>;

export const H1: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h1"
        href="#タイトル1"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル1"
      />
    );
  },
};

export const H2: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h2"
        href="#タイトル2"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル2"
      />
    );
  },
};

export const H3: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h3"
        href="#タイトル3"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル3"
      />
    );
  },
};

export const H4: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h4"
        href="#タイトル4"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル4"
      />
    );
  },
};

export const H5: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h5"
        href="#タイトル5"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル5"
      />
    );
  },
};

export const H6: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h6"
        href="#タイトル6"
        size="clamp"
        subtitle="さぶたいとる"
        title="タイトル6"
      />
    );
  },
};

export const XL: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h1"
        href="#タイトル1"
        size="xl"
        subtitle="さぶたいとる"
        title="タイトル1"
      />
    );
  },
};

export const LG: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h1"
        href="#タイトル1"
        size="lg"
        subtitle="さぶたいとる"
        title="タイトル1"
      />
    );
  },
};

export const MD: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h1"
        href="#タイトル1"
        size="md"
        subtitle="さぶたいとる"
        title="タイトル1"
      />
    );
  },
};

export const SM: Story = {
  render: () => {
    return (
      <AnchorHeading
        as="h1"
        href="#タイトル1"
        size="sm"
        subtitle="さぶたいとる"
        title="タイトル1"
      />
    );
  },
};
