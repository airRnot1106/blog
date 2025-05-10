import type { FC } from 'react';
import { getTocTree } from '../../../utils';
import {
  BlogArticleTocNavigationSectionPresentational,
  type BlogArticleTocNavigationSectionPresentationalProps,
} from './blog-article-toc-navigation-section.presentational';

export type BlogArticleTocNavigationSectionContainerProps = Omit<
  BlogArticleTocNavigationSectionPresentationalProps,
  'headings'
> & {
  file: string;
};

export const BlogArticleTocNavigationSectionContainer: FC<
  BlogArticleTocNavigationSectionContainerProps
> = ({ file, ...rest }) => {
  const headings = getTocTree(file);

  return (
    <BlogArticleTocNavigationSectionPresentational
      headings={headings}
      {...rest}
    />
  );
};
