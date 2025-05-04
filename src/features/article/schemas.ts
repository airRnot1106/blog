import { z } from 'zod';

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  createdAt: z.string().datetime(),
});

export type Article = z.infer<typeof articleSchema>;
