import { Calendar, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Datetime } from '../../../../datetime/components/atoms/datetime';
import type { BlogArticle } from '../../../schemas';

import '../../../styles.css';

export type BlogArticleLayoutProps = ComponentProps<'div'> & {
  article: BlogArticle;
  blogArticleTocNavigationSection: ReactNode;
  children: ReactNode;
};

export const BlogArticleLayout: FC<BlogArticleLayoutProps> = ({
  article: { createdAt, description, thumbnail, title, updatedAt },
  blogArticleTocNavigationSection,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '1rem',
        }),
      )}
      {...rest}
    >
      <div
        className={css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '0.5rem',
        })}
      >
        <Image
          alt=""
          className={css({
            justifySelf: 'center',
            paddingBlock: '1rem',
          })}
          height="268"
          src={thumbnail}
          width="512"
        />
        <div
          className={css({
            display: 'inline-grid',
            gridAutoFlow: 'column',
            columnGap: '1rem',
            marginTop: '0.5rem',
            width: 'fit-content',
          })}
        >
          <span
            className={css({
              display: 'inline-grid',
              gridAutoFlow: 'column',
              alignItems: 'center',
              columnGap: '0.5rem',
            })}
          >
            <Calendar size="18" />
            <Datetime datetime={createdAt} />
          </span>
          {createdAt.getTime() !== updatedAt.getTime() && (
            <span
              className={css({
                display: 'inline-grid',
                gridAutoFlow: 'column',
                alignItems: 'center',
                columnGap: '0.5rem',
              })}
            >
              <RefreshCw size="18" />
              <Datetime datetime={updatedAt} />
            </span>
          )}
        </div>
        <h1
          className={css({
            fontSize: '4xl',
            fontWeight: 'bold',
          })}
        >
          {title}
        </h1>
        {description !== '' && <p>{description}</p>}
      </div>
      <div
        className={css({
          display: 'grid',
          gridTemplateAreas: {
            base: `
            "article-toc"
            "article-content"
          `,
            lg: `
            "article-content article-toc"
          `,
          },
          gridTemplateColumns: {
            lg: '1fr auto',
          },
        })}
      >
        <aside
          className={css({
            gridArea: 'article-toc',
            minWidth: '18rem',
            lgDown: {
              display: 'contents',
            },
            lg: {
              '& > section': {
                position: 'sticky',
                top: '1rem',
              },
            },
          })}
        >
          {blogArticleTocNavigationSection}
        </aside>
        <div
          className={cx(
            css({
              gridArea: 'article-content',
            }),
            'mdc',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
