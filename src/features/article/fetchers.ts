import { getOgp } from '../../utils/ogp';
import { mapResult, matchResult } from '../../utils/result';
import { getQiitaArticles } from '../qiita-article/fetchers';
import { getZennArticles } from '../zenn-article/fetchers';
import { mapQiitaArticle, mapZennArticle } from './mappers';

export const getArticles = async () => {
  const [qiitaResult, zennResult] = await Promise.all([
    getQiitaArticles(),
    getZennArticles(),
  ]);

  const mergedArticles = [
    mapResult(qiitaResult, ({ data }) => data.map(mapQiitaArticle)),
    mapResult(zennResult, ({ data: { articles } }) =>
      articles.map(mapZennArticle),
    ),
  ]
    .flatMap((result) => (result.ok ? result.data : []))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const articles = await Promise.all(
    mergedArticles.map(async (article) => {
      const ogImage = matchResult(
        await getOgp(article.url),
        ({ result }) => result.ogImage.url,
        () => '/images/article/fallback.webp',
      );
      return {
        id: article.id,
        title: article.title,
        href: article.url,
        src: ogImage,
        createdAt: new Date(article.createdAt),
      };
    }),
  );

  return articles;
};
