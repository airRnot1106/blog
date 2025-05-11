import { Newspaper } from 'lucide-react';
import type { SiteNavigationLink } from './types';

export const SITE_NAVIGATION_LINKS = [
  {
    id: 1,
    label: '記事一覧',
    href: '/articles',
    icon: <Newspaper size="28" />,
  },
] as const satisfies SiteNavigationLink[];
