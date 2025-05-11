import type { ComponentProps, FC } from 'react';
import { css } from '../../../../../../../../styled-system/css';
import type { SiteNavigationLink as SiteNavigationLinkType } from '../../../../../types';
import { SiteNavigationLink } from '../../../../atoms/site-navigation-link';

export type AnchorSiteNavigationLinkListProps = ComponentProps<'ul'> & {
  links: SiteNavigationLinkType[];
};

export const AnchorSiteNavigationLinkList: FC<
  AnchorSiteNavigationLinkListProps
> = ({ links, className, ...rest }) => {
  return (
    <ul
      className={css({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
      })}
      {...rest}
    >
      {links.map((link) => (
        <li
          className={css({
            display: 'grid',
            gridTemplateColumns: 'subgrid',
            gridColumn: '1 / -1',
          })}
          key={link.id}
        >
          <SiteNavigationLink
            className={css({
              gridTemplateColumns: 'subgrid',
              gridColumn: '1 / -1',
            })}
            link={link}
          ></SiteNavigationLink>
        </li>
      ))}
    </ul>
  );
};
