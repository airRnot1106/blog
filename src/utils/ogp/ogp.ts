import ogs from 'open-graph-scraper';
import type { OpenGraphScraperOptions } from 'open-graph-scraper/types';
import { err, ok } from '../result';
import { ogpSchema } from './schemas';

export const getOgp = async (
  url: string,
  options?: Omit<OpenGraphScraperOptions, 'url'>,
) => {
  const getOgpResult = await ogs({ url, ...options });
  if (getOgpResult.error) {
    return err(new Error('failed to get ogp'));
  }

  const parseOgpResult = ogpSchema.safeParse(getOgpResult.result);
  if (!parseOgpResult.success) {
    return err(new Error('failed to parse ogp'));
  }

  return ok({
    ...getOgpResult,
    result: {
      ...parseOgpResult.data,
      ogImage: parseOgpResult.data.ogImage[0],
    },
  });
};
