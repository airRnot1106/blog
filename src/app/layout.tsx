import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SiteThemeProvider } from '../features/site-theme/providers';
import { ich1q, zenkaku } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'airRnot.dev',
  description: 'Blog by airRnot',
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
