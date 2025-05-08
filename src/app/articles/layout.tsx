import { SiteContentLayout } from '../../features/site-content/components/molecules/site-content-layout';

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteContentLayout>{children}</SiteContentLayout>;
}
