import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Datetime } from '../../../../datetime/components/atoms/datetime';
import type { Article } from '../../../schemas';

export type ArticleCardProps = ComponentProps<'article'> & {
  article: Article;
};

export const ArticleCard: FC<ArticleCardProps> = ({
  article: { title, href, src, createdAt, isExternalSite },
  className,
  ...rest
}) => {
  return (
    <article
      className={cx(
        className,
        css({
          display: 'inline-grid',
          gridTemplateRows: 'auto auto auto',
          borderRadius: 'xl',
          overflow: 'hidden',
          backgroundColor: 'surface',
          boxShadow: 'sm',
          maxWidth: '32rem',
        }),
      )}
      {...rest}
    >
      <Link
        className={css({
          display: 'inline-grid',
          gridTemplateRows: 'subgrid',
          gridRow: 'span 3',
        })}
        href={href}
        target={isExternalSite ? '_blank' : undefined}
      >
        <Image
          alt=""
          className={css({
            width: '32rem',
            aspectRatio: '1.91',
            objectFit: 'contain',
          })}
          height="268"
          src={src}
          width="512"
        />
        <div
          className={css({
            display: 'inline-grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 2',
            paddingBlock: '0.25rem',
            paddingInline: '0.5rem',
          })}
        >
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              wordBreak: 'break-word',
            })}
          >
            {title}
          </span>
          <Datetime datetime={createdAt} />
        </div>
      </Link>
    </article>
  );
};
