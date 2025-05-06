import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { AttendedEventList } from './attended-event-list';

const meta: Meta<typeof AttendedEventList> = {
  title: 'Features/AttendedEvent/Components/Molecules/AttendedEventList',
  component: AttendedEventList,
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

type Story = StoryObj<typeof AttendedEventList>;

export const Default: Story = {
  render: () => {
    return <AttendedEventList />;
  },
};
