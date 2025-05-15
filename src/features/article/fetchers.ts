import { isBefore } from '../../utils/date';
import { getOgp } from '../../utils/ogp';
import { shouldNeverHappen } from '../../utils/panic-helper';
import { mapResult, matchResult } from '../../utils/result';
import { getBlogArticles } from '../blog-article/utils';
import { getQiitaArticles } from '../qiita-article/fetchers';
import { getZennArticles } from '../zenn-article/fetchers';
import { mapBlogArticle, mapQiitaArticle, mapZennArticle } from './mappers';

export const getArticles = async () => {
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

  return [...articles, ...blogArticles].sort((a, b) =>
    isBefore(a.createdAt, b.createdAt) ? 1 : -1,
  );
};
