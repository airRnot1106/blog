import { css } from '../../../styled-system/css';
import { ArticleCardList } from '../../features/article/components/molecules/article-card-list';
import { ArticleSection } from '../../features/article/components/molecules/article-section';
import { SiteBreadcrumbLayout } from '../../features/site/components/molecules/site-breadcrumb-layout';

export default function Articles() {
  return (
    <main
      className={css({
        display: 'grid',
        gridTemplateColumns: '5% [content-start] 1fr [content-end] 5%',
        marginBottom: '2rem',
      })}
    >
      <div
        className={css({
          gridColumn: 'content',
        })}
      >
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
          <ArticleSection>
            <ArticleCardList />
          </ArticleSection>
        </SiteBreadcrumbLayout>
      </div>
    </main>
  );
}
