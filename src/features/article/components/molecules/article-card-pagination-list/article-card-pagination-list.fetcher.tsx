import type { FC } from 'react';
import {
  type GetArticlesSearchParams,
  getArticlesResponseSchema,
} from '../../../../../app/api/articles/schemas';
import { Pagination } from '../../../../../components/atoms/pagination';
import { API_BASE_URL } from '../../../../../libs/api';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { ArticleCardList } from '../article-card-list';
import {
  ArticleCardPaginationListPresentational,
  type ArticleCardPaginationListPresentationalProps,
} from './article-card-pagination-list.presentational';

export type ArticleCardPaginationListFetcherProps = Omit<
  ArticleCardPaginationListPresentationalProps,
  'pagination' | 'children'
> & {
  params?: GetArticlesSearchParams;
};

export const ArticleCardPaginationListFetcher: FC<
  ArticleCardPaginationListFetcherProps
> = async ({ params = {}, ...rest }) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value != null) {
      searchParams.append(key, value.toString());
    }
  }

  const response = await fetch(
    `${API_BASE_URL}/api/articles?${searchParams.toString()}`,
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

  const { articles, currentPage, totalPage } = result.data;

  return (
    <ArticleCardPaginationListPresentational
      pagination={
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          variant="h-p-n-t"
        />
      }
      {...rest}
    >
      {articles.length === 0 ? (
        <FetchResultMessage target="記事" variant="not-found" />
      ) : (
        <ArticleCardList articles={articles} />
      )}
    </ArticleCardPaginationListPresentational>
  );
};
