import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { Link } from '../../../../../components/atoms/link';
import type { TocHeading } from '../../../types';

export type BlogArticleTocNavigationSectionPresentationalProps =
  ComponentProps<'section'> & {
    headings: TocHeading[];
  };

export const renderTocTree = (headings: TocHeading[]) => {
  return (
    <ol
      className={css({
        display: 'grid',
        gridAutoFlow: 'row',
        rowGap: '0.875rem',
        listStyleType: 'decimal',
        paddingInlineStart: '1.5rem',
        marginBlock: '0',
        marginInline: '0',
        lineHeight: '1.6',
        fontSize: 'sm',
      })}
    >
      {headings.map((heading) => (
        <li
          className={css({
            '& > ol': {
              marginTop: '0.25rem',
            },
          })}
          key={heading.id}
        >
          <Link href={`#${heading.title}`} variant="underline">
            {heading.title}
          </Link>
          {heading.children.length > 0 && renderTocTree(heading.children)}
        </li>
      ))}
    </ol>
  );
};

export const BlogArticleTocNavigationSectionPresentational: FC<
  BlogArticleTocNavigationSectionPresentationalProps
> = ({ headings, className, ...rest }) => {
  return (
    <section
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '1rem',
          paddingTop: '1rem',
          paddingBottom: '2rem',
          paddingInline: '1.5rem',
          backgroundColor: 'surface',
          borderRadius: 'md',
          boxShadow: 'md',
        }),
      )}
      {...rest}
    >
      <Heading
        as="h2"
        className={css({
          width: 'fit-content',
        })}
        size="sm"
        subtitle="もくじ"
        title="目次"
      />
      <nav
        className={css({
          '& > ol > li > a': {
            fontSize: 'lg',
            fontWeight: 'bold',
          },
        })}
      >
        {renderTocTree(headings)}
      </nav>
    </section>
  );
};
