import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { Pagination } from '../../../../../components/atoms/pagination';
import { articles } from '../../../mocks';
import { ArticleCardList } from '../article-card-list/article-card-list';
import { ArticleCardPaginationListPresentational } from '../article-card-pagination-list/article-card-pagination-list.presentational';
import { ArticleSection } from './article-section';

const meta: Meta<typeof ArticleSection> = {
  component: ArticleSection,
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

type Story = StoryObj<typeof ArticleSection>;

export const Default: Story = {
  parameters: {
    navigation: {
      query: {
        page: '2',
      },
    },
  },
  render: () => {
    return (
      <ArticleSection>
        <ArticleCardPaginationListPresentational
          pagination={
            <Pagination currentPage={2} totalPage={4} variant="h-p-n-t" />
          }
        >
          <ArticleCardList articles={articles} />
        </ArticleCardPaginationListPresentational>
      </ArticleSection>
    );
  },
};

const Component = (
  <ArticleSection>
    <ArticleCardPaginationListPresentational
      pagination={
        <Pagination currentPage={2} totalPage={4} variant="h-p-n-t" />
      }
    >
      <ArticleCardList articles={articles} />
    </ArticleCardPaginationListPresentational>
  </ArticleSection>
);

export const XSmall: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
    parameters: {
      navigation: {
        query: {
          page: '2',
        },
      },
    },
  },
  render: () => {
    return Component;
  },
};

export const Small: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
    parameters: {
      navigation: {
        query: {
          page: '2',
        },
      },
    },
  },
  render: () => {
    return Component;
  },
};

export const Medium: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
    parameters: {
      navigation: {
        query: {
          page: '2',
        },
      },
    },
  },
  render: () => {
    return Component;
  },
};

export const Large: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
    parameters: {
      navigation: {
        query: {
          page: '2',
        },
      },
    },
  },
  render: () => {
    return Component;
  },
};

export const XLarge: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl',
    },
    parameters: {
      navigation: {
        query: {
          page: '2',
        },
      },
    },
  },
  render: () => {
    return Component;
  },
};
