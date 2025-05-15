import Link, { type LinkProps } from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import type { SiteNavigationLink as SiteNavigationLinkType } from '../../../types';

export type SiteNavigationLinkProps = Omit<
  LinkProps & ComponentProps<'a'>,
  'href'
> & {
  link: SiteNavigationLinkType;
};

export const SiteNavigationLink: FC<SiteNavigationLinkProps> = ({
  link,
  className,
  ...rest
}) => {
  return (
    <Link
      className={cx(
        className,
        css({
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          columnGap: '0.875rem',
          paddingBlock: '1.25rem',
          paddingInline: '1.25rem',
          _hover: {
            backgroundColor:
              'color-mix(in oklab, var(--colors-base), var(--color-mix-base) 7%)',
          },
        }),
      )}
      href={link.href}
      {...rest}
    >
      {link.icon}
      <span>{link.label}</span>
    </Link>
  );
};
