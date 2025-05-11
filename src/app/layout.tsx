import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SiteThemeProvider } from '../features/site-theme/providers';
import { GOOGLE_ANALYTICS_ID } from '../libs/analytics';
import { ich1q, zenkaku } from './fonts';

import './globals.css';

const title = 'airRnot.dev';
const description =
  'airRnotのブログです。主にフロントエンドに関する記事をまとめています。';
const url = 'https://airrnot.dev';

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description: description,
  icons:
    'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>✈️</text></svg>',
  alternates: {
    types: {
      'application/rss+xml': `${url}/articles/feed.xml`,
    },
  },

  openGraph: {
    title: title,
    description: description,
    url: url,
    type: 'article',
    images: [
      {
        url: `${url}/api/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [
      {
        url: `${url}/api/og?title=${encodeURIComponent(title)}`,
        alt: title,
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
