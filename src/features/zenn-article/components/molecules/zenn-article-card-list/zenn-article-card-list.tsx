import type { ZennArticle } from '@/features/zenn-article/schemas';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ZennArticleCard } from '../zenn-article-card/zenn-article-card';

export type ZennArticleCardListProps = Readonly<
  ComponentProps<'ul'> & {
    articles: ZennArticle[];
  }
>;

export const ZennArticleCardList: FC<ZennArticleCardListProps> = ({
  articles,
  className,
  ...rest
}) => {
  return (
    <ul
      className={twMerge('carousel carousel-center gap-x-8', className)}
      {...rest}
    >
      {articles.map((article) => (
        <li key={article.id} className="carousel-item">
          <ZennArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
};
