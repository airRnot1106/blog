import { articles } from '@/features/zenn-article/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleCardListPresentational } from './zenn-article-card-list-presentational';

const meta: Meta<typeof ZennArticleCardListPresentational> = {
  title:
    'Features/ZennArticle/Components/Molecules/ZennArticleCardListPresentational',
  component: ZennArticleCardListPresentational,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZennArticleCardListPresentational>;

export const Default: Story = {
  args: {
    articles,
  },
};
