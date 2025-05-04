import 'server-only';

import { shouldNeverHappen } from '../../utils/panic-helper';

export const QIITA_API_KEY =
  process.env.QIITA_API_KEY ??
  shouldNeverHappen('QIITA_API_KEY is not defined');
