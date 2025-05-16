import type { Metadata } from 'next';
import { ArticleCardPaginationList } from '../../../../features/article/components/molecules/article-card-pagination-list';
import { ArticleSection } from '../../../../features/article/components/molecules/article-section';
import { getArticles } from '../../../../features/article/fetchers';
import { SiteBreadcrumbLayout } from '../../../../features/site/components/molecules/site-breadcrumb-layout';
import { SiteContentLayout } from '../../../../features/site-content/components/molecules/site-content-layout';

export const metadata: Metadata = {
  title: '記事一覧',
};

type Params = {
  params: Promise<{ page: string }>;
};

const PER_PAGE = 10;

export default async function Articles({ params }: Params) {
  const { page } = await params;

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
            href: '/articles/page/1',
          },
        ]}
      >
        <main>
          <ArticleSection>
            <ArticleCardPaginationList
              params={{ page: Number(page), perPage: PER_PAGE }}
            />
          </ArticleSection>
        </main>
      </SiteBreadcrumbLayout>
    </SiteContentLayout>
  );
}

export async function generateStaticParams() {
  const { totalPage } = await getArticles({
    page: 1,
    perPage: PER_PAGE,
  });
  return Array.from({ length: totalPage }, (_, i) => ({ page: `${i + 1}` }));
}

export const dynamicParams = false;
