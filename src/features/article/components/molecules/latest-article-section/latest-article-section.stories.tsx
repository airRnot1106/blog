import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { articles } from '../../../mocks';
import { LatestArticleCardListPresentational } from '../latest-article-card-list/latest-article-card-list.presentational';
import { LatestArticleSection } from './latest-article-section';

const meta: Meta<typeof LatestArticleSection> = {
  title: 'Features/Article/Components/Molecules/LatestArticleSection',
  component: LatestArticleSection,
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

type Story = StoryObj<typeof LatestArticleSection>;

export const Default: Story = {
  render: () => {
    return (
      <LatestArticleSection>
        <LatestArticleCardListPresentational articles={articles} />
      </LatestArticleSection>
    );
  },
};

const Component = (
  <LatestArticleSection>
    <LatestArticleCardListPresentational articles={articles} />
  </LatestArticleSection>
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
