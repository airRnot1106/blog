import type { Metadata } from 'next';
import { ArticleCardList } from '../../features/article/components/molecules/article-card-list';
import { ArticleSection } from '../../features/article/components/molecules/article-section';
import { SiteBreadcrumbLayout } from '../../features/site/components/molecules/site-breadcrumb-layout';
import { SiteContentLayout } from '../../features/site-content/components/molecules/site-content-layout';

export const metadata: Metadata = {
  title: '記事一覧',
};

export default function Articles() {
  return (
    <SiteContentLayout>
      <SiteBreadcrumbLayout
        items={[
          {
            label: 'TOP',
            href: '/',
          },
          {
            label: '記事一覧',
            href: '/articles',
          },
        ]}
      >
        <main>
          <ArticleSection>
            <ArticleCardList />
          </ArticleSection>
        </main>
      </SiteBreadcrumbLayout>
    </SiteContentLayout>
  );
}
