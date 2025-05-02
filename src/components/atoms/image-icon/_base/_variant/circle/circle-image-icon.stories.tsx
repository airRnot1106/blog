import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { CircleImageIcon } from './circle-image-icon';

const meta: Meta<typeof CircleImageIcon> = {
  title: 'Components/Atoms/ImageIcon/_Base/_Variant/CircleImageIcon',
  component: CircleImageIcon,
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

type Story = StoryObj<typeof CircleImageIcon>;

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
      <CircleImageIcon
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
              <CircleImageIcon
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
