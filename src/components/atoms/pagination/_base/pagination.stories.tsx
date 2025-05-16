import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/articles/page',
      },
    },
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

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  parameters: {
    navigation: {
      query: {
        page: '2',
      },
    },
  },
  render: () => {
    const props = {
      currentPage: 2,
      totalPage: 4,
      href: '/articles/page',
    };
    return <Pagination variant="h-p-n-t" {...props} />;
  },
};
