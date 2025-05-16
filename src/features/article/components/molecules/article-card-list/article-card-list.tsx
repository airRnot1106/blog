import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { ArticleCard, type ArticleCardProps } from '../article-card';

export type ArticleCardListProps = ComponentProps<'ul'> & {
  articles: ArticleCardProps['article'][];
};

export const ArticleCardList: FC<ArticleCardListProps> = ({
  articles,
  className,
  ...rest
}) => {
  return (
    <ul
      className={cx(
        className,
        css({
          display: 'inline-grid',
          gridTemplateColumns: {
            base: 'auto',
            md: 'repeat(2, auto)',
          },
          columnGap: '1rem',
        }),
      )}
      {...rest}
    >
      {articles.map((article) => (
        <li
          className={css({
            display: 'inline-grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 3',
          })}
          key={article.id}
        >
          <ArticleCard
            article={article}
            className={css({
              gridTemplateRows: 'subgrid',
              gridRow: 'span 3',
              marginBottom: '1rem',
            })}
          />
        </li>
      ))}
    </ul>
  );
};
