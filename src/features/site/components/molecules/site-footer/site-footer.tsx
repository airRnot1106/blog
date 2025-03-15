import type { ComponentPropsWithoutRef } from 'react';

export type SiteFooterProps = Readonly<ComponentPropsWithoutRef<'footer'>>;

export const SiteFooter = ({ className, ...rest }: SiteFooterProps) => {
  return (
    <footer
      className="grid grid-cols-1 items-center justify-items-center py-2 border-t border-muted/20"
      {...rest}
    >
      <p className="text-xs font-normal text-center">
        © {new Date().getFullYear()} - Copyright airRnot, All Rights Reserved.
      </p>
    </footer>
  );
};
