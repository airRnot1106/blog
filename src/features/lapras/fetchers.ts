import 'server-only';

import { cache } from 'react';
import { getOgp } from '../../utils/ogp';
import { mapResult } from '../../utils/result';

const BASE_URL = 'https://lapras.com/public/airrnot';

export const getLaprasImage = cache(async () => {
  const result = mapResult(
    await getOgp(BASE_URL),
    ({ result }) => result.ogImage.url,
  );

  return result;
});
