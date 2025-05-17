import { Calendar, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Datetime } from '../../../../datetime/components/atoms/datetime';
import type { BlogArticle } from '../../../schemas';

import '../../../styles.css';
import { Heading } from '../../../../../components/atoms/heading';
import { BlogArticlePodcastAudio } from '../../../../blog-article-podcast/components/atoms/blog-article-podcast-audio';
import { BlogArticlePodcastSection } from '../../../../blog-article-podcast/components/molecules/blog-article-podcast-section';
import { SITE_URL, UNLINKABLE_SITE_NAME } from '../../../../site/consts';
import { SocialShareLinkButtonList } from '../../../../social/components/molecules/social-share-link-button-list';

export type BlogArticleLayoutProps = ComponentProps<'div'> & {
  article: BlogArticle;
  blogArticleTocNavigationSection: ReactNode;
  children: ReactNode;
};

export const BlogArticleLayout: FC<BlogArticleLayoutProps> = ({
  article: { audio, createdAt, description, slug, thumbnail, title, updatedAt },
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
          priority
          src={thumbnail}
          width="512"
        />
        <div
          className={css({
            display: 'inline-grid',
            gridAutoFlow: {
              base: 'row',
              sm: 'column',
            },
            alignItems: 'center',
            justifyItems: 'flex-start',
            rowGap: '0.5rem',
            columnGap: '2.5rem',
            marginTop: '0.5rem',
            width: 'fit-content',
          })}
        >
          <div
            className={css({
              display: 'inline-grid',
              gridAutoFlow: 'column',
              alignItems: 'center',
              columnGap: '1rem',
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
              <Calendar aria-hidden size="18" />
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
          <SocialShareLinkButtonList
            direction="horizontal"
            text={`${title} | ${UNLINKABLE_SITE_NAME}`}
            url={`${SITE_URL}/articles/${slug}`}
          />
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
        {audio != null && (
          <BlogArticlePodcastSection
            audio={<BlogArticlePodcastAudio slug="4029abffbdbdfad8" />}
            className={css({
              backgroundColor: 'surface',
              borderRadius: '4xl',
              paddingBlock: '1rem',
              paddingInline: '2rem',
              marginTop: '1rem',
            })}
            heading={
              <Heading
                as="h2"
                size="sm"
                subtitle="ぽっどきゃすと"
                title="Podcast"
              />
            }
          />
        )}
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
              overflowX: 'hidden',
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
