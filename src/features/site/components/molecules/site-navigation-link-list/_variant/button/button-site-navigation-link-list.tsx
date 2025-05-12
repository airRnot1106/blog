import type { ComponentProps, FC } from 'react';
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
        return (
          <li key={link.id}>
            <LinkButton
              aria-label={link.label}
              href={link.href}
              size="md"
              variant="ghost"
            >
              {link.icon}
            </LinkButton>
          </li>
        );
      })}
    </ul>
  );
};
