import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { SiteUtilityList } from '../../../../site-utility/components/molecules/site-utility-list';
import { SITE_NAME, SITE_NAVIGATION_LINKS } from '../../../consts';
import { SiteDrawer } from '../site-drawer';
import { SiteNavigationLinkList } from '../site-navigation-link-list';

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
          {SITE_NAME}
        </h1>
      </Link>
      <div
        className={css({
          display: 'inline-grid',
          gridAutoFlow: 'column',
          hideBelow: 'md',
        })}
      >
        <SiteNavigationLinkList
          links={SITE_NAVIGATION_LINKS}
          variant="button"
        />
        <hr
          className={css({
            color: 'transparent',
            backgroundColor: 'muted/20',
            marginInline: '1rem',
            width: '1px',
            height: '100%',
          })}
        />
        <SiteUtilityList />
      </div>
      <div
        className={css({
          hideFrom: 'md',
        })}
      >
        <SiteDrawer />
      </div>
    </header>
  );
};
