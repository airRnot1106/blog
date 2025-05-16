import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { css } from '../../../../../../../styled-system/css';
import { HPNTPagination } from './h-p-n-t-pagination';

const meta: Meta<typeof HPNTPagination> = {
  component: HPNTPagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/articles',
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

type Story = StoryObj<typeof HPNTPagination>;

const props = {
  currentPage: 2,
  totalPage: 4,
  href: '/articles',
};

export const Default: Story = {
  parameters: {
    navigation: {
      query: {
        page: '2',
      },
    },
  },
  render: () => {
    return <HPNTPagination {...props} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headButton = canvas.getByRole('link', {
      name: '最初のページへ',
    });
    const prevButton = canvas.getByRole('link', {
      name: '前のページへ',
    });
    const nextButton = canvas.getByRole('link', {
      name: '次のページへ',
    });
    const tailButton = canvas.getByRole('link', {
      name: '最後のページへ',
    });
    const headButtonUrl = headButton.getAttribute('href');
    const prevButtonUrl = prevButton.getAttribute('href');
    const nextButtonUrl = nextButton.getAttribute('href');
    const tailButtonUrl = tailButton.getAttribute('href');

    expect(headButtonUrl).toBe(`${props.href}?page=1`);
    expect(prevButtonUrl).toBe(`${props.href}?page=${props.currentPage - 1}`);
    expect(nextButtonUrl).toBe(`${props.href}?page=${props.currentPage + 1}`);
    expect(tailButtonUrl).toBe(`${props.href}?page=${props.totalPage}`);
  },
};

export const Head: Story = {
  parameters: {
    navigation: {
      query: {
        page: '1',
      },
    },
  },
  render: () => {
    const props = {
      currentPage: 1,
      totalPage: 4,
      href: '/articles',
    };
    return <HPNTPagination {...props} />;
  },
};

export const Tail: Story = {
  parameters: {
    navigation: {
      query: {
        page: '4',
      },
    },
  },
  render: () => {
    const props = {
      currentPage: 4,
      totalPage: 4,
      href: '/articles',
    };
    return <HPNTPagination {...props} />;
  },
};
