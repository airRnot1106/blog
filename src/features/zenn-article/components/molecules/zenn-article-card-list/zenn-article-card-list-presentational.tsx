import type { ZennArticle } from '@/features/zenn-article/schemas';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ZennArticleCard } from '../zenn-article-card/zenn-article-card';

export type ZennArticleCardListPresentationalProps = Readonly<
  ComponentProps<'ul'> & {
    articles: ZennArticle[];
  }
>;

export const ZennArticleCardListPresentational: FC<
  ZennArticleCardListPresentationalProps
> = ({ articles, className, ...rest }) => {
  return (
    <ul
      className={twMerge(
        'carousel carousel-center gap-x-[clamp(1rem,0.818rem_+_0.91vw,1.5rem)]',
        className,
      )}
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
