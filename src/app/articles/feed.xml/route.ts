import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getBlogArticles } from '../../../features/blog-article/utils';
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '../../../features/site/consts';
import { formatDateToRFC822 } from '../../../utils/date';
import { matchResult } from '../../../utils/result';

export async function GET() {
  const feed = new RSS({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/articles/feed.xml`,
    copyright: 'airRnot',
    language: 'ja',
    pubDate: formatDateToRFC822(new Date()),
  });

  const articles = matchResult(
    await getBlogArticles(),
    (articles) => articles,
    (error) => {
      throw error;
    },
  );

  for (const article of articles) {
    feed.item({
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/articles/${article.slug}`,
      date: formatDateToRFC822(article.createdAt),
      guid: `airRnot/articles/${article.slug}`,
    });
  }

  const xml = feed.xml({ indent: true });

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
