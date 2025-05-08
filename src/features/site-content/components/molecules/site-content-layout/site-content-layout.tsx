import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';

export type SiteContentLayoutProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export const SiteContentLayout: FC<SiteContentLayoutProps> = ({
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
          gridTemplateColumns: '5% [content-start] 1fr [content-end] 5%',
          marginBottom: '2rem',
        }),
      )}
      {...rest}
    >
      <div
        className={css({
          gridColumn: 'content',
        })}
      >
        {children}
      </div>
    </div>
  );
};
