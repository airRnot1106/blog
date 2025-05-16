import type { FC } from 'react';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { getArticles } from '../../../fetchers';
import { ArticleCardList } from '../article-card-list';
import type { LatestArticleCardListPresentationalProps } from './latest-article-card-list.presentational';

export type LatestArticleCardListFetcherProps = Omit<
  LatestArticleCardListPresentationalProps,
  'articles'
>;

export const LatestArticleCardListFetcher: FC<
  LatestArticleCardListFetcherProps
> = async (props) => {
  const { articles } = await getArticles({
    page: 1,
    perPage: 4,
  });

  return articles.length === 0 ? (
    <FetchResultMessage target="記事" variant="not-found" />
  ) : (
    <ArticleCardList articles={articles} {...props} />
  );
};
