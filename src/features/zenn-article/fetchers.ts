import 'server-only';

import { err, ok } from '../../utils/result';
import { getZennArticlesSchema } from './schemas';

const BASE_URL = 'https://zenn.dev/api';

export const getZennArticles = async () => {
  const res = await fetch(
    `${BASE_URL}/articles?username=airrnot1106&order=latest`,
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

  if (!res.ok) {
    return err({
      status: res.status,
      error: new Error('failed to fetch zenn articles'),
    });
  }

  const maybeData: unknown = await res.json();

  const result = getZennArticlesSchema.safeParse(maybeData);

  if (!result.success) {
    return err({
      status: res.status,
      error: new Error('failed to parse zenn articles'),
    });
  }

  return ok({
    status: res.status,
    data: result.data,
  });
};
