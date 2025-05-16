import Link, { type LinkProps } from 'next/link';
import type { ComponentProps, FC, ReactNode } from 'react';
import { cva, cx } from '../../../../../../../styled-system/css';
import { buttonRecipe } from '../../../../button';

export type LinkButtonProps = LinkProps &
  ComponentProps<'a'> & {
    size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    children: ReactNode;
  };

export const LinkButton: FC<LinkButtonProps> = ({
  size = 'md',
  disabled,
  icon,
  iconPosition = 'right',
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      aria-disabled={disabled}
      className={cx(
        className,
        buttonRecipe({ size }),
        cva({
          variants: {
            disabled: {
              true: {
                pointerEvents: 'none',
                opacity: '0.5',
              },
            },
          },
        })({ disabled }),
      )}
      tabIndex={disabled ? -1 : undefined}
      {...rest}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </Link>
  );
};
