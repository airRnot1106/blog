import {
  type Attributes,
  type ComponentProps,
  cloneElement,
  type FC,
} from 'react';
import { css, cx } from '../../../../../../../../styled-system/css';
import { LinkButton } from '../../../../../../../components/atoms/link-button';
import type { SiteNavigationLink as SiteNavigationLinkType } from '../../../../../types';

export type ButtonSiteNavigationLinkListProps = ComponentProps<'ul'> & {
  links: SiteNavigationLinkType[];
};

export const ButtonSiteNavigationLinkList: FC<
  ButtonSiteNavigationLinkListProps
> = ({ links, className, ...rest }) => {
  return (
    <ul
      className={cx(
        className,
        css({
          display: 'inline-grid',
          gridAutoFlow: 'column',
          columnGap: '0.25rem',
        }),
      )}
      {...rest}
    >
      {links.map((link) => {
        const icon = cloneElement(link.icon, {
          'aria-label': link.label,
          role: 'img',
        } as Attributes);
        return (
          <li key={link.id}>
            <LinkButton href={link.href} size="md" variant="ghost">
              {icon}
            </LinkButton>
          </li>
        );
      })}
    </ul>
  );
};
