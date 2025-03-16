import { articles } from '@/features/zenn-article/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleCardList } from './zenn-article-card-list';

const meta: Meta<typeof ZennArticleCardList> = {
  title: 'Features/ZennArticle/Components/Molecules/ZennArticleCardList',
  component: ZennArticleCardList,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZennArticleCardList>;

export const Default: Story = {
  args: {
    articles,
  },
};
