import { extractHeadings } from 'extract-md-headings';
import { shouldNeverHappen } from '../../utils/panic-helper';
import { ARTICLE_PATH } from '../blog-article/consts';
import type { TocHeading } from './types';

export const getTocTree = (file: string) => {
  const headings = extractHeadings(`${ARTICLE_PATH}/${file}`).map(
    (heading) => ({
      ...heading,
      title:
        heading.title.split(' - ')[0] ?? shouldNeverHappen('missing title'),
    }),
  );

  const root: TocHeading[] = [];
  const stack: TocHeading[] = [];

  for (const heading of headings) {
    const node: TocHeading = { ...heading, children: [] };

    while (
      stack.length > 0 &&
      heading.level <=
        (stack[stack.length - 1]?.level ?? shouldNeverHappen('missing level'))
    ) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1]?.children.push(node);
    }

    stack.push(node);
  }

  return root;
};
