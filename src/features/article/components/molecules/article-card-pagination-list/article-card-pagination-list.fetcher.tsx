import type { FC } from 'react';
import { Pagination } from '../../../../../components/atoms/pagination';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { type GetArticlesParams, getArticles } from '../../../fetchers';
import { ArticleCardList } from '../article-card-list';
import {
  ArticleCardPaginationListPresentational,
  type ArticleCardPaginationListPresentationalProps,
} from './article-card-pagination-list.presentational';

export type ArticleCardPaginationListFetcherProps = Omit<
  ArticleCardPaginationListPresentationalProps,
  'pagination' | 'children'
> & {
  params?: GetArticlesParams;
};

export const ArticleCardPaginationListFetcher: FC<
  ArticleCardPaginationListFetcherProps
> = async ({ params = {}, ...rest }) => {
  const { articles, currentPage, totalPage } = await getArticles(params);

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
