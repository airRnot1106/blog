import type { ZennArticle } from '@/features/zenn-article/schemas';
import Image from 'next/image';
import Link from 'next/link';
import { type ComponentProps, type FC, memo } from 'react';
import { twMerge } from 'tailwind-merge';

export type ZennArticleCardProps = Readonly<
  ComponentProps<'article'> & {
    article: ZennArticle;
  }
>;

export const ZennArticleCard: FC<ZennArticleCardProps> = memo(
  ({ article, className, ...rest }) => {
    return (
      <article className={twMerge('inline-grid', className)} {...rest}>
        <Link href={article.url}>
          <Image
            src={article.imageUrl}
            width="1200"
            height="630"
            alt={article.title}
            priority
            className="w-[clamp(12.5rem,7.955rem_+_22.73vw,25rem)] rounded-[clamp(0.5rem,0.318rem_+_0.91vw,1rem)]"
          />
        </Link>
      </article>
    );
  },
);
ZennArticleCard.displayName = 'ZennArticleCard';
