import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
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

export const Anchor: Story = {
  render: () => {
    return (
      <Heading
        as="h1"
        href="#タイトル"
        subtitle="さぶたいとる"
        title="タイトル"
        variant="anchor"
      />
    );
  },
};

export const Normal: Story = {
  render: () => {
    return <Heading as="h1" subtitle="さぶたいとる" title="タイトル" />;
  },
};
