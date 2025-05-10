import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { BlogArticleTocNavigationSectionPresentational } from '../../../../blog-article-toc/components/molecules/blog-article-toc-navigation-section/blog-article-toc-navigation-section.presentational';
import { headings } from '../../../../blog-article-toc/mocks';
import { blogArticles } from '../../../mocks';
import { BlogArticleLayout } from './blog-article-layout';

const meta: Meta<typeof BlogArticleLayout> = {
  component: BlogArticleLayout,
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

type Story = StoryObj<typeof BlogArticleLayout>;

export const Default: Story = {
  render: () => {
    return (
      <BlogArticleLayout
        article={blogArticles[0]}
        blogArticleTocNavigationSection={
          <BlogArticleTocNavigationSectionPresentational headings={headings} />
        }
      >
        Test
      </BlogArticleLayout>
    );
  },
};

const Component = (
  <BlogArticleLayout
    article={blogArticles[0]}
    blogArticleTocNavigationSection={
      <BlogArticleTocNavigationSectionPresentational headings={headings} />
    }
  >
    Test
  </BlogArticleLayout>
);

export const XSmall: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs',
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
  },
  render: () => {
    return Component;
  },
};
