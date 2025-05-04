import type { FC } from 'react';
import { getArticles } from '../../../fetchers';
import {
  LatestArticleCardListPresentational,
  type LatestArticleCardListPresentationalProps,
} from './latest-article-card-list.presentational';

export type LatestArticleCardListFetcherProps = Omit<
  LatestArticleCardListPresentationalProps,
  'articles'
>;

export const LatestArticleCardListFetcher: FC<
  LatestArticleCardListFetcherProps
> = async (props) => {
  const latestArticles = (await getArticles()).slice(0, 4);

  return (
    <LatestArticleCardListPresentational articles={latestArticles} {...props} />
  );
};
