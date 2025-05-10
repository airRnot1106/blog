import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { Datetime } from './datetime';

const meta: Meta<typeof Datetime> = {
  title: 'Features/Datetime/Components/Atoms/Datetime',
  component: Datetime,
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

type Story = StoryObj<typeof Datetime>;

export const Default: Story = {
  render: () => {
    return <Datetime datetime={new Date()} />;
  },
};
