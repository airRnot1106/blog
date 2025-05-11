import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { SiteUtilityList } from '../../../../site-utility/components/molecules/site-utility-list';

export type SiteHeaderProps = ComponentProps<'header'>;

export const SiteHeader: FC<SiteHeaderProps> = ({ className, ...rest }) => {
  return (
    <header
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: {
            base: '0.25rem',
            sm: '0.5rem',
          },
          paddingInline: {
            base: '0.5rem',
            sm: '1rem',
          },
          borderBottom: '1px solid',
          borderBottomColor: 'muted/20',
        }),
      )}
      {...rest}
    >
      <Link href="/">
        <h1
          className={css({
            fontSize: {
              base: '2xl',
              sm: '4xl',
            },
            fontWeight: 'bold',
          })}
        >
          airRnot.dev
        </h1>
      </Link>
      <SiteUtilityList />
    </header>
  );
};
