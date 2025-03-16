import { articles } from '@/features/zenn-article/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleCard } from './zenn-article-card';

const meta: Meta<typeof ZennArticleCard> = {
  title: 'Features/ZennArticle/Components/Molecules/ZennArticleCard',
  component: ZennArticleCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZennArticleCard>;

export const Default: Story = {
  args: {
    article: articles[0],
  },
};
