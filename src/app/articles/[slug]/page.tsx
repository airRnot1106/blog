import type { Metadata } from 'next';
import { BlogArticleLayout } from '../../../features/blog-article/components/molecules/blog-article-layout';
import {
  getBlogArticleBySlug,
  getBlogArticles,
} from '../../../features/blog-article/utils';
import { BlogArticleTocNavigationSection } from '../../../features/blog-article-toc/components/molecules/blog-article-toc-navigation-section';
import { SiteBreadcrumbLayout } from '../../../features/site/components/molecules/site-breadcrumb-layout';
import { matchResult } from '../../../utils/result';

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = matchResult(
    await getBlogArticleBySlug(slug),
    (article) => article,
    (error) => {
      throw error;
    },
  );
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://airrnot.dev/articles/${article.slug}`,
      type: 'article',
      images: [
        {
          url: `https://airrnot.dev/api/og?title=${encodeURIComponent(
            article.title,
          )}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [
        {
          url: `https://airrnot.dev/api/og?title=${encodeURIComponent(
            article.title,
          )}`,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const article = matchResult(
    await getBlogArticleBySlug(slug),
    (article) => article,
    (error) => {
      throw error;
    },
  );
  const { default: Post } = await import(
    `../../../contents/articles/${article.file}`
  );
  return (
    <SiteBreadcrumbLayout
      items={[
        { label: 'TOP', href: '/' },
        { label: '記事一覧', href: '/articles' },
        { label: article.title, href: `/articles/${article.slug}` },
      ]}
    >
      <BlogArticleLayout
        article={article}
        blogArticleTocNavigationSection={
          <BlogArticleTocNavigationSection file={article.file} />
        }
      >
        <Post />
      </BlogArticleLayout>
    </SiteBreadcrumbLayout>
  );
}

export async function generateStaticParams() {
  return await getBlogArticles().then((result) => {
    if (!result.ok) {
      throw result.error;
    }
    return result.data.map((article) => ({
      slug: article.slug,
    }));
  });
}

export const dynamicParams = false;
