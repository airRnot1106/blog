import Link, { type LinkProps } from 'next/link';
import type { ComponentProps, FC, ReactNode } from 'react';
import { cx } from '../../../../../../../styled-system/css';
import { buttonRecipe } from '../../../../button';

export type LinkButtonProps = LinkProps &
  ComponentProps<'a'> & {
    size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
  };

export const LinkButton: FC<LinkButtonProps> = ({
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  ...rest
}) => {
  return (
    <Link className={cx(className, buttonRecipe({ size }))} {...rest}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </Link>
  );
};
