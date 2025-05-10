import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
import { ImageIcon } from './image-icon';

const meta: Meta<typeof ImageIcon> = {
  component: ImageIcon,
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

type Story = StoryObj<typeof ImageIcon>;

export const Circle: Story = {
  decorators: [
    (Story) => (
      <div
        className={css({
          width: '300px',
          height: '300px',
        })}
      >
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <ImageIcon
        alt=""
        height="1024"
        src="/images/profile/airrnot.webp"
        variant="circle"
        width="1024"
      />
    );
  },
};

export const Square: Story = {
  decorators: [
    (Story) => (
      <div
        className={css({
          width: '300px',
          height: '300px',
        })}
      >
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <ImageIcon
        alt=""
        height="1024"
        src="/images/profile/airrnot.webp"
        variant="square"
        width="1024"
      />
    );
  },
};
