import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { ArrowRight } from 'lucide-react';
import { css } from '../../../../../../../styled-system/css';
import { NormalButton } from './normal-button';

const meta: Meta<typeof NormalButton> = {
  component: NormalButton,
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

type Story = StoryObj<typeof NormalButton>;

const handleClick = fn();

export const Default: Story = {
  render: () => {
    return (
      <NormalButton onClick={handleClick} size="md">
        Button
      </NormalButton>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
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
              <NormalButton size={size}>Button</NormalButton>
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
      <NormalButton
        className={css({
          columnGap: '0.25rem',
        })}
        icon={<ArrowRight />}
        iconPosition="right"
        size="md"
      >
        もっとみる
      </NormalButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <NormalButton disabled onClick={handleClick} size="md">
        Button
      </NormalButton>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  },
};
