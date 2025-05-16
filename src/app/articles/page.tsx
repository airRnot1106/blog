import type { Metadata } from 'next';
// import { z } from 'zod';
import { ArticleCardPaginationList } from '../../features/article/components/molecules/article-card-pagination-list';
import { ArticleSection } from '../../features/article/components/molecules/article-section';
import { SiteBreadcrumbLayout } from '../../features/site/components/molecules/site-breadcrumb-layout';
import { SiteContentLayout } from '../../features/site-content/components/molecules/site-content-layout';

export const metadata: Metadata = {
  title: '記事一覧',
};

// type Params = {
//   searchParams: Promise<unknown>;
// };

// const searchParamsSchema = z.object({
//   page: z.coerce.number().optional().catch(undefined),
//   perPage: z.coerce.number().optional().catch(undefined),
// });

// export default function Articles({ searchParams }: Params) {
export default async function Articles() {
  // const parsedSearchParams = searchParamsSchema.parse(await searchParams);
  const parsedSearchParams = {
    page: 1,
    perPage: 10,
  };

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
            <ArticleCardPaginationList params={parsedSearchParams} />
          </ArticleSection>
        </main>
      </SiteBreadcrumbLayout>
    </SiteContentLayout>
  );
}
