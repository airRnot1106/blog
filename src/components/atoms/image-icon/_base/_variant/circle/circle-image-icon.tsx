import type { FC } from 'react';
import { css, cx } from '../../../../../../../styled-system/css';
import { ImageIcon, type ImageIconProps } from '../_abstract';

export type CircleImageIconProps = ImageIconProps;

export const CircleImageIcon: FC<CircleImageIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <ImageIcon
      className={cx(
        className,
        css({
          borderRadius: 'full',
          objectFit: 'fit',
        }),
      )}
      {...rest}
    />
  );
};
