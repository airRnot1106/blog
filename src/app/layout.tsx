import type { Metadata } from 'next';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SiteThemeProvider } from '../features/site-theme/providers';

import './globals.css';
import { ich1q, zenkaku } from './fonts';

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
      <body className={`${zenkaku.className} ${ich1q.variable}`}>
        <SiteThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </SiteThemeProvider>
      </body>
    </html>
  );
}
