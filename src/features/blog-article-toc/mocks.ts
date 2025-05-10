import type { TocHeading } from './types';

export const headings = [
  {
    id: 487587,
    slug: 'test',
    title: 'Test',
    level: 2,
    children: [
      {
        id: 152454,
        slug: 'hoge---',
        title: 'Hoge',
        level: 3,
        children: [],
      },
    ],
  },
  {
    id: 829690,
    slug: 'heading2',
    title: 'Heading2',
    level: 2,
    children: [
      {
        id: 211750,
        slug: 'heading3',
        title: 'Heading3',
        level: 3,
        children: [
          {
            id: 274521,
            slug: 'heading4',
            title: 'Heading4',
            level: 4,
            children: [],
          },
        ],
      },
    ],
  },
] as const satisfies TocHeading[];
