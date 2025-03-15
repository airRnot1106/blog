import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type SiteFooterProps = Readonly<ComponentProps<'footer'>>;

export const SiteFooter: FC<SiteFooterProps> = ({ className, ...rest }) => {
  return (
    <footer
      className={twMerge(
        'grid grid-cols-1 items-center justify-items-center py-2 border-t border-muted/20',
        className,
      )}
      {...rest}
    >
      <p className="text-xs font-normal text-center">
        © {new Date().getFullYear()} - Copyright airRnot, All Rights Reserved.
      </p>
    </footer>
  );
};
