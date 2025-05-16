import { NextResponse } from 'next/server';
import { getArticles } from '../../../features/article/fetchers';
import {
  type GetArticlesResponse,
  getArticlesSearchParamsSchema,
} from './schemas';

export async function GET(request: Request) {
  const searchParams = getArticlesSearchParamsSchema.parse(
    Object.fromEntries(new URL(request.url).searchParams.entries()),
  );

  const result = await getArticles(searchParams);

  return NextResponse.json(result satisfies GetArticlesResponse, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=60',
      'Content-Type': 'application/json',
    },
  });
}
