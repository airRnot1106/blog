import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import { css } from '../../../../../../../styled-system/css';
import { GhostLinkButton } from './ghost-link-button';

const meta: Meta<typeof GhostLinkButton> = {
  component: GhostLinkButton,
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

type Story = StoryObj<typeof GhostLinkButton>;

export const Default: Story = {
  render: () => {
    return (
      <GhostLinkButton href="#" size="md">
        Button
      </GhostLinkButton>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <ul
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        })}
      >
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(
          (size) => (
            <li key={size}>
              <GhostLinkButton href="#" size={size}>
                Button
              </GhostLinkButton>
            </li>
          ),
        )}
      </ul>
    );
  },
};

export const Icon: Story = {
  render: () => {
    return (
      <GhostLinkButton
        className={css({
          columnGap: '0.25rem',
        })}
        href="#"
        icon={<ArrowRight />}
        iconPosition="right"
        size="md"
      >
        もっとみる
      </GhostLinkButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <GhostLinkButton disabled href="#" size="md">
        Button
      </GhostLinkButton>
    );
  },
};
