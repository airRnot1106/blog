import type { ComponentProps, FC, ReactNode } from 'react';
import { cx } from '../../../../../../../styled-system/css';
import { buttonRecipe } from './button.recipe';

export type ButtonProps = ComponentProps<'button'> & {
  size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cx(className, buttonRecipe({ size }))} {...rest}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  );
};
