import type {
  GetZennArticleWithOgpListByUsernameResponse,
  ZennArticle,
} from './schemas';

export const convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList =
  (
    getZennArticleWithOgpListByUsernameResponse: GetZennArticleWithOgpListByUsernameResponse,
  ): ZennArticle[] => {
    const { articles } = getZennArticleWithOgpListByUsernameResponse;
    const zennArticles = articles.map((article) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      url: `https://zenn.dev${article.path}`,
      imageUrl: article.ogp['og:image'][0],
      publishedAt: article.published_at,
      updatedAt: article.body_updated_at,
    }));

    return zennArticles;
  };
