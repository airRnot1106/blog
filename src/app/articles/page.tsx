import { ArticleCardList } from '../../features/article/components/molecules/article-card-list';
import { ArticleSection } from '../../features/article/components/molecules/article-section';
import { SiteBreadcrumbLayout } from '../../features/site/components/molecules/site-breadcrumb-layout';

export default function Articles() {
  return (
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
  );
}
