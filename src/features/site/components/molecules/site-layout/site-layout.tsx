import type { ComponentProps, FC, ReactNode } from 'react';
import { SiteFooter } from '../site-footer';
import { SiteHeader } from '../site-header';

export type SiteLayoutProps = Readonly<
  ComponentProps<'div'> & {
    children: ReactNode;
  }
>;

export const SiteLayout: FC<SiteLayoutProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh" {...rest}>
      <SiteHeader />
      <main className={className}>{children}</main>
      <SiteFooter />
    </div>
  );
};
