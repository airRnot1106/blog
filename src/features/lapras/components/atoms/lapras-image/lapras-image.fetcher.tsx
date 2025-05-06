import type { FC } from 'react';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { getLaprasImage } from '../../../fetchers';
import {
  LaprasImagePresentational,
  type LaprasImagePresentationalProps,
} from './lapras-image.presentational';

export type LaprasImageFetcherProps = Omit<
  LaprasImagePresentationalProps,
  'src'
>;

export const LaprasImageFetcher: FC<LaprasImageFetcherProps> = async (
  props,
) => {
  const res = await getLaprasImage();

  if (!res.ok) {
    return <FetchResultMessage variant="error" />;
  }

  const src = res.data;

  return <LaprasImagePresentational src={src} {...props} />;
};
