'use server';

import { err, ok } from '@/utils/result';
import {
  getZennArticleListByUsernameResponseSchema,
  getZennArticleOgpByUrlResponseSchema,
  getZennArticleWithOgpListByUsernameResponseSchema,
} from './schemas';

export const getZennArticleListByUsername = async (username: string) => {
  const res = await fetch(
    `https://zenn.dev/api/articles?username=${username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const json = (await res.json()) as unknown;

  const result = getZennArticleListByUsernameResponseSchema.safeParse(json);
  if (!result.success) {
    return err(result.error);
  }

  return ok(result.data);
};

export const getZennArticleOgpByUrl = async (url: string) => {
  const res = await fetch(
    `https://ogp-scanner.kunon.jp/v1/ogp_info?url=${url}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  const json = (await res.json()) as unknown;

  const result = getZennArticleOgpByUrlResponseSchema.safeParse(json);
  if (!result.success) {
    return err(result.error);
  }

  return ok(result.data);
};

export const getZennArticleWithOgpListByUsername = async (username: string) => {
  const getZennArticleListByUsernameResult =
    await getZennArticleListByUsername(username);
  if (!getZennArticleListByUsernameResult.ok) {
    return err(getZennArticleListByUsernameResult.error);
  }

  const getZennArticleListByUsernameResponse =
    getZennArticleListByUsernameResult.value;

  const getZennArticleOgpByUrlResults = await Promise.all(
    getZennArticleListByUsernameResponse.articles.map(async (article) => {
      const getZennArticleOgpByUrlResult = await getZennArticleOgpByUrl(
        `https://zenn.dev${article.path}`,
      );
      if (!getZennArticleOgpByUrlResult.ok) {
        return err(getZennArticleOgpByUrlResult.error);
      }

      const getZennArticleOgpByUrlResponse = getZennArticleOgpByUrlResult.value;

      return ok({
        ...article,
        ...getZennArticleOgpByUrlResponse,
      });
    }),
  );

  const filteredGetZennArticleOgpByUrlResults =
    getZennArticleOgpByUrlResults.filter(
      (getZennArticleOgpByUrlResult) => getZennArticleOgpByUrlResult.ok,
    );
  const data = filteredGetZennArticleOgpByUrlResults.map(
    (getZennArticleOgpByUrlResult) => getZennArticleOgpByUrlResult.value,
  );

  const responseResult =
    getZennArticleWithOgpListByUsernameResponseSchema.safeParse({
      articles: data,
      next_page: getZennArticleListByUsernameResponse.next_page,
    });
  if (!responseResult.success) {
    return err(responseResult.error);
  }

  return ok(responseResult.data);
};
