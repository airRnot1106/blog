import type { BlogArticle } from './schemas';

export const blogArticles = [
  {
    audio: null,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2023-01-01T00:00:00Z'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: 'blog-article-1.md',
    slug: 'blog-article-1',
    thumbnail: '/images/article/fallback.webp',
    title: 'Blog Article 1',
    updatedAt: new Date('2024-01-01T00:00:00Z'),
  },
] as const satisfies BlogArticle[];
