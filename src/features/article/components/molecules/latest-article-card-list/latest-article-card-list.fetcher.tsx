import type { FC } from 'react';
import { getArticlesResponseSchema } from '../../../../../app/api/articles/schemas';
import { API_BASE_URL } from '../../../../../libs/api';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { ArticleCardList } from '../article-card-list';
import type { LatestArticleCardListPresentationalProps } from './latest-article-card-list.presentational';

export type LatestArticleCardListFetcherProps = Omit<
  LatestArticleCardListPresentationalProps,
  'articles'
>;

export const LatestArticleCardListFetcher: FC<
  LatestArticleCardListFetcherProps
> = async (props) => {
  const response = await fetch(
    `${API_BASE_URL}/api/articles?page=1&perPage=4`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60,
      },
    },
  );

  if (!response.ok) {
    return <FetchResultMessage variant="error" />;
  }

  const data = await response.json();

  const result = getArticlesResponseSchema.safeParse(data);

  if (!result.success) {
    return <FetchResultMessage variant="error" />;
  }

  const { articles } = result.data;

  return articles.length === 0 ? (
    <FetchResultMessage target="記事" variant="not-found" />
  ) : (
    <ArticleCardList articles={articles} {...props} />
  );
};
