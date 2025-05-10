import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
import { LinkButton } from './link-button';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
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

type Story = StoryObj<typeof LinkButton>;

export const Ghost: Story = {
  render: () => {
    return (
      <LinkButton href="#" variant="ghost">
        Button
      </LinkButton>
    );
  },
};

export const Normal: Story = {
  render: () => {
    return (
      <LinkButton href="#" variant="normal">
        Button
      </LinkButton>
    );
  },
};
