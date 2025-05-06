import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { articles } from '../../../mocks';
import { ArticleCardListPresentational } from '../article-card-list/article-card-list.presentational';
import { ArticleSection } from './article-section';

const meta: Meta<typeof ArticleSection> = {
  title: 'Features/Article/Components/Molecules/ArticleSection',
  component: ArticleSection,
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

type Story = StoryObj<typeof ArticleSection>;

export const Default: Story = {
  render: () => {
    return (
      <ArticleSection>
        <ArticleCardListPresentational articles={articles} />
      </ArticleSection>
    );
  },
};

const Component = (
  <ArticleSection>
    <ArticleCardListPresentational articles={articles} />
  </ArticleSection>
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
