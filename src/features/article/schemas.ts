import { z } from 'zod';

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  href: z.string(),
  createdAt: z.date(),
  isExternalSite: z.boolean(),
  src: z.string(),
});

export type Article = z.infer<typeof articleSchema>;
