import 'server-only';

import { err, ok } from '../../utils/result';
import { getQiitaArticlesSchema } from './schemas';

const BASE_URL = 'https://qiita.com/api/v2';

export const getQiitaArticles = async () => {
  const res = await fetch(`${BASE_URL}/authenticated_user/items`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
    },
  });

  if (!res.ok) {
    return err({
      status: res.status,
      error: new Error('failed to fetch qiita articles'),
    });
  }

  const maybeData: unknown = await res.json();

  const result = getQiitaArticlesSchema.safeParse(maybeData);

  if (!result.success) {
    return err({
      status: res.status,
      error: new Error('failed to parse qiita articles'),
    });
  }

  return ok({
    status: res.status,
    data: result.data,
  });
};
