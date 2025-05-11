import { shouldNeverHappen } from '../../utils/panic-helper';

export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ??
  shouldNeverHappen('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is not defined');
