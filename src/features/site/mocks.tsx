import { Newspaper } from 'lucide-react';
import type { SiteNavigationLink } from './types';

export const siteNavigationLinks = [
  {
    id: 1,
    label: '記事一覧',

    href: '/articles',
    icon: <Newspaper size="28" />,
  },
  {
    id: 2,
    label: 'タグ一覧',
    href: '/tags',
    icon: <Newspaper size="28" />,
  },
  {
    id: 3,
    label: 'アーカイブ',
    href: '/archives',
    icon: <Newspaper size="28" />,
  },
  {
    id: 4,
    label: 'プロフィール',
    href: '/profile',
    icon: <Newspaper size="28" />,
  },
] as const satisfies SiteNavigationLink[];
