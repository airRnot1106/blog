import { z } from 'zod';
import { articleSchema } from '../../../features/article/schemas';

export const getArticlesSearchParamsSchema = z.object({
  page: z.coerce.number().optional().catch(undefined),
  perPage: z.coerce.number().optional().catch(undefined),
});

export type GetArticlesSearchParams = z.infer<
  typeof getArticlesSearchParamsSchema
>;

export const getArticlesResponseSchema = z.object({
  articles: z.array(articleSchema),
  totalCount: z.number(),
  currentPage: z.number(),
  perPage: z.number(),
  totalPage: z.number(),
});

export type GetArticlesResponse = z.infer<typeof getArticlesResponseSchema>;
