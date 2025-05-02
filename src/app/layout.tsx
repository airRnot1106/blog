import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SiteLayout } from '../features/site/components/molecules/site-layout';
import { SiteThemeProvider } from '../features/site-theme/providers';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </SiteThemeProvider>
      </body>
    </html>
  );
}
