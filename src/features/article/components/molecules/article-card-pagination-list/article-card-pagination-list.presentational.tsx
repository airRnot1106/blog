import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';

export type ArticleCardPaginationListPresentationalProps =
  ComponentProps<'div'> & {
    pagination: ReactNode;
    children: ReactNode;
  };

export const ArticleCardPaginationListPresentational: FC<
  ArticleCardPaginationListPresentationalProps
> = ({ pagination, children, className, ...rest }) => {
  return (
    <div
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'center',
          rowGap: '2rem',
        }),
      )}
      {...rest}
    >
      {children}
      {pagination}
    </div>
  );
};
