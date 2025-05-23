import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../features/site/consts';
import { SiteThemeProvider } from '../features/site-theme/providers';
import { GOOGLE_ANALYTICS_ID } from '../libs/analytics';
import { ich1q, zenkaku } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    types: {
      'application/rss+xml': `${SITE_URL}/articles/feed.xml`,
    },
  },

  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent(SITE_NAME)}`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent(SITE_NAME)}`,
        alt: SITE_NAME,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenkaku.className} ${ich1q.variable} ${css({
          color: 'text',
          backgroundColor: 'base',
        })}`}
      >
        <SiteThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </SiteThemeProvider>
      </body>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
