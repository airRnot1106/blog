import type { ZennArticle } from '@/features/zenn-article/schemas';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type ZennArticleCardProps = Readonly<
  ComponentProps<'article'> & {
    article: ZennArticle;
  }
>;

export const ZennArticleCard: FC<ZennArticleCardProps> = ({
  article,
  className,
  ...rest
}) => {
  return (
    <article
      className={twMerge('inline-grid rounded-3xl', className)}
      {...rest}
    >
      <Link href={article.url}>
        <Image
          src={article.imageUrl}
          width="1200"
          height="630"
          alt={article.title}
          priority
          className="rounded-3xl"
        />
      </Link>
    </article>
  );
};
