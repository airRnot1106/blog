import type { FC } from 'react';
import { getArticles } from '../../../fetchers';
import {
  ArticleCardListPresentational,
  type ArticleCardListPresentationalProps,
} from './article-card-list.presentational';

export type ArticleCardListFetcherProps = Omit<
  ArticleCardListPresentationalProps,
  'articles'
>;

export const ArticleCardListFetcher: FC<ArticleCardListFetcherProps> = async (
  props,
) => {
  const latestArticles = await getArticles();

  return <ArticleCardListPresentational articles={latestArticles} {...props} />;
};
