import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleCard } from './zenn-article-card';

const articleMock = {
  id: 380329,
  title:
    'BCD Designにおける共通部分をスマートに管理するディレクトリ構成から学んだこと',
  slug: '7543bcf6033d62',
  url: 'https://zenn.dev/airrnot1106/articles/7543bcf6033d62',
  imageUrl:
    'https://res.cloudinary.com/zenn/image/upload/s--kqHEV0ns--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:BCD%2520Design%25E3%2581%25AB%25E3%2581%258A%25E3%2581%2591%25E3%2582%258B%25E5%2585%25B1%25E9%2580%259A%25E9%2583%25A8%25E5%2588%2586%25E3%2582%2592%25E3%2582%25B9%25E3%2583%259E%25E3%2583%25BC%25E3%2583%2588%25E3%2581%25AB%25E7%25AE%25A1%25E7%2590%2586%25E3%2581%2599%25E3%2582%258B%25E3%2583%2587%25E3%2582%25A3%25E3%2583%25AC%25E3%2582%25AF%25E3%2583%2588%25E3%2583%25AA%25E6%25A7%258B%25E6%2588%2590%25E3%2581%258B%25E3%2582%2589%25E5%25AD%25A6%25E3%2582%2593%25E3%2581%25A0%25E3%2581%2593%25E3%2581%25A8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:airRnot%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2MxYzlkMTkxNjQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
  publishedAt: new Date('2025-03-10T12:15:07.142Z'),
  updatedAt: new Date('2025-03-12T00:22:37.380Z'),
};

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
    article: articleMock,
  },
};
