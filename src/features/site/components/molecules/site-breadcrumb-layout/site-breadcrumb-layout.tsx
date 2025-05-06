import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import {
  SiteBreadcrumb,
  type SiteBreadcrumbProps,
} from '../../atoms/site-breadcrumb';

export type SiteBreadcrumbLayoutProps = ComponentProps<'div'> & {
  items: SiteBreadcrumbProps['items'];
  children: ReactNode;
};

export const SiteBreadcrumbLayout: FC<SiteBreadcrumbLayoutProps> = ({
  items,
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
      <SiteBreadcrumb
        className={css({
          paddingBlock: '1rem',
          borderBottom: '1px solid',
          borderBottomColor: 'muted/20',
        })}
        items={items}
      />
      {children}
    </div>
  );
};
