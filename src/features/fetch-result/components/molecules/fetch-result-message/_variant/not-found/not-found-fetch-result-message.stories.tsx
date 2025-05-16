import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../../styled-system/css';
import { NotFoundFetchResultMessage } from './not-found-fetch-result-message';

const meta: Meta<typeof NotFoundFetchResultMessage> = {
  component: NotFoundFetchResultMessage,
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

type Story = StoryObj<typeof NotFoundFetchResultMessage>;

export const Default: Story = {
  render: () => {
    return <NotFoundFetchResultMessage target="記事" />;
  },
};
