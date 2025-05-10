import { SiteContentLayout } from '../../../features/site-content/components/molecules/site-content-layout';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteContentLayout>{children}</SiteContentLayout>;
}
