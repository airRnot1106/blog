import { z } from 'zod';

export const ogpSchema = z.object({
  ogUrl: z.string().url(),
  ogTitle: z.string(),
  ogImage: z.tuple([
    z.object({
      url: z.string().url(),
    }),
  ]),
});
