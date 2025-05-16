import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import { css } from '../../../../../../../styled-system/css';
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

export const Default: Story = {
  render: () => {
    return (
      <LinkButton href="#" size="md">
        Button
      </LinkButton>
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
              <LinkButton href="#" size={size}>
                Button
              </LinkButton>
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
      <LinkButton
        className={css({
          columnGap: '0.25rem',
        })}
        href="#"
        icon={<ArrowRight />}
        iconPosition="right"
        size="md"
      >
        もっとみる
      </LinkButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <LinkButton disabled href="#" size="md">
        Button
      </LinkButton>
    );
  },
};
