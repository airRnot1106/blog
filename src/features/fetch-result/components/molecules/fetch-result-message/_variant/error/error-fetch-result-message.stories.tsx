import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../../styled-system/css';
import { ErrorFetchResultMessage } from './error-fetch-result-message';

const meta: Meta<typeof ErrorFetchResultMessage> = {
  component: ErrorFetchResultMessage,
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

type Story = StoryObj<typeof ErrorFetchResultMessage>;

export const Default: Story = {
  render: () => {
    return <ErrorFetchResultMessage />;
  },
};
