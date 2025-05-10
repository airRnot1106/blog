import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SiteThemeProvider } from '../features/site-theme/providers';
import { ich1q, zenkaku } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | airRnot.dev',
    default: 'airRnot.dev',
  },
  description:
    'airRnotのブログです。主にフロントエンドに関する記事をまとめています。',
  icons:
    'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>✈️</text></svg>',
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
    </html>
  );
}
