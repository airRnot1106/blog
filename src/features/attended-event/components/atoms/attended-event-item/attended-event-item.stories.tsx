import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { attendedEvents } from '../../../consts';
import { AttendedEventItem } from './attended-event-item';

const meta: Meta<typeof AttendedEventItem> = {
  component: AttendedEventItem,
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

type Story = StoryObj<typeof AttendedEventItem>;

export const Default: Story = {
  render: () => {
    const event = attendedEvents[0];
    return (
      <AttendedEventItem
        dates={event.dates.map((date) => new Date(date))}
        title={event.title}
        url={event.url}
      />
    );
  },
};

export const MultipleDates: Story = {
  render: () => {
    const event = attendedEvents[2];
    return (
      <AttendedEventItem
        dates={event.dates.map((date) => new Date(date))}
        title={event.title}
        url={event.url}
      />
    );
  },
};
