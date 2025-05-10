import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import { css } from '../../../../../../../styled-system/css';
import { NormalLinkButton } from './normal-link-button';

const meta: Meta<typeof NormalLinkButton> = {
  component: NormalLinkButton,
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

type Story = StoryObj<typeof NormalLinkButton>;

export const Default: Story = {
  render: () => {
    return (
      <NormalLinkButton href="#" size="md">
        Button
      </NormalLinkButton>
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
              <NormalLinkButton href="#" size={size}>
                Button
              </NormalLinkButton>
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
      <NormalLinkButton
        className={css({
          columnGap: '0.25rem',
        })}
        href="#"
        icon={<ArrowRight />}
        iconPosition="right"
        size="md"
      >
        もっとみる
      </NormalLinkButton>
    );
  },
};
