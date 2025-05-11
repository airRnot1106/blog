import type { ReactElement } from 'react';

export type SiteNavigationLink = {
  id: number;
  label: string;
  href: string;
  icon: ReactElement;
};
