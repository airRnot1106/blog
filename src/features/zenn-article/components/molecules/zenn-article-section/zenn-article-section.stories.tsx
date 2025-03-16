import { articles } from '@/features/zenn-article/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleSectionPresentational } from './zenn-article-section-presentational';

const meta: Meta<typeof ZennArticleSectionPresentational> = {
  title:
    'Features/ZennArticle/Components/Molecules/ZennArticleSectionPresentational',
  component: ZennArticleSectionPresentational,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZennArticleSectionPresentational>;

export const Default: Story = {
  args: {
    articles,
  },
};

export const Filled: Story = {
  args: {
    articles: undefined,
  },
};
