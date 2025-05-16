import { Newspaper } from 'lucide-react';
import type { SiteNavigationLink } from './types';

export const SITE_NAME = 'airRnot.dev';
export const SITE_DESCRIPTION =
  'airRnotのブログです。主にフロントエンドに関する記事をまとめています。';
export const SITE_DOMAIN = 'airrnot.dev';
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const SITE_NAVIGATION_LINKS = [
  {
    id: 1,
    label: '記事一覧',
    href: '/articles/page/1',
    icon: <Newspaper size="28" />,
  },
] as const satisfies SiteNavigationLink[];
