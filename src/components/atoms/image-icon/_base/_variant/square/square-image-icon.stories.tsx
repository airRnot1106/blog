import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { SquareImageIcon } from './square-image-icon';

const meta: Meta<typeof SquareImageIcon> = {
  title: 'Components/Atoms/ImageIcon/_Base/_Variant/SquareImageIcon',
  component: SquareImageIcon,
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

type Story = StoryObj<typeof SquareImageIcon>;

export const Default: Story = {
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
      <SquareImageIcon
        alt=""
        height="1024"
        src="/images/profile/airrnot.webp"
        width="1024"
      />
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
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(
          (size) => (
            <li key={size}>
              <SquareImageIcon
                alt=""
                height="1024"
                size={size}
                src="/images/profile/airrnot.webp"
                width="1024"
              />
            </li>
          ),
        )}
      </ul>
    );
  },
};
