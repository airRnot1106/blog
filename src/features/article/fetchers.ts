import 'server-only';

import { cache } from 'react';
import { isBefore } from '../../utils/date';
import { getOgp } from '../../utils/ogp';
import { shouldNeverHappen } from '../../utils/panic-helper';
import { mapResult, matchResult } from '../../utils/result';
import { getBlogArticles } from '../blog-article/utils';
import { getQiitaArticles } from '../qiita-article/fetchers';
import { getZennArticles } from '../zenn-article/fetchers';
import { mapBlogArticle, mapQiitaArticle, mapZennArticle } from './mappers';

export type GetArticlesParams = {
  page?: number | undefined;
  perPage?: number | undefined;
};

const DEFAULT_PER_PAGE = 10;

export const getArticles = cache(async (params?: GetArticlesParams) => {
  const { page = 1, perPage = DEFAULT_PER_PAGE } = params ?? {};

  const [blogResult, qiitaResult, zennResult] = await Promise.all([
    getBlogArticles(),
    getQiitaArticles(),
    getZennArticles(),
  ]);

  const mergedArticles = [
    mapResult(qiitaResult, ({ data }) => data.map(mapQiitaArticle)),
    mapResult(zennResult, ({ data: { articles } }) =>
      articles.map(mapZennArticle),
    ),
  ].flatMap((result) => (result.ok ? result.data : []));

  const articles = await Promise.all(
    mergedArticles.map(async (article) => {
      const ogImage = matchResult(
        await getOgp(article.href),
        ({ result }) => result.ogImage.url,
        () => '/images/articles/fallback.webp',
      );
      return {
        ...article,
        src: ogImage,
      };
    }),
  );

  const blogArticles = matchResult(
    blogResult,
    (data) => data,
    (error) => shouldNeverHappen(error.toString()),
  ).map(mapBlogArticle);

  const finalArticles = [...articles, ...blogArticles].sort((a, b) =>
    isBefore(a.createdAt, b.createdAt) ? 1 : -1,
  );

  return {
    articles: finalArticles.slice((page - 1) * perPage, page * perPage),
    totalCount: finalArticles.length,
    currentPage: page,
    perPage,
    totalPage: Math.ceil(finalArticles.length / perPage),
  };
});
