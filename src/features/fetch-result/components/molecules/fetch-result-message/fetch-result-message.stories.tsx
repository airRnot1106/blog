import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { FetchResultMessage } from './fetch-result-message';

const meta: Meta<typeof FetchResultMessage> = {
  component: FetchResultMessage,
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

type Story = StoryObj<typeof FetchResultMessage>;

export const ErrorMessage: Story = {
  render: () => {
    return <FetchResultMessage variant="error" />;
  },
};

export const NotFoundMessage: Story = {
  render: () => {
    return <FetchResultMessage target="記事" variant="not-found" />;
  },
};
