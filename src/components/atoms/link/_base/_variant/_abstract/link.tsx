import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import type { ComponentProps, FC, ReactNode } from 'react';

export type LinkProps = NextLinkProps &
  ComponentProps<'a'> & {
    children: ReactNode;
  };

export const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return <NextLink {...rest}>{children}</NextLink>;
};
