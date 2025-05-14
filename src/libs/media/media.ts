import { shouldNeverHappen } from '../../utils/panic-helper';

export const R2_MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_R2_MEDIA_BASE_URL ??
  shouldNeverHappen('NEXT_PUBLIC_R2_MEDIA_BASE_URL is not defined');
