import Image, { type ImageProps } from 'next/image';
import type { ComponentProps, FC } from 'react';
import { cva, cx } from '../../../../../../../styled-system/css';

export type ImageIconProps = ImageProps &
  ComponentProps<'img'> & {
    size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  };

export const ImageIcon: FC<ImageIconProps> = ({
  size = 'md',
  className,
  ...rest
}) => {
  return (
    <Image
      className={cx(
        className,
        cva({
          base: {
            objectFit: 'contain',
          },
          variants: {
            size: {
              'fit-content': { width: 'fit-content', height: 'fit-content' },
              xs: { width: '3rem', height: '3rem' },
              sm: { width: '4rem', height: '4rem' },
              md: { width: '5rem', height: '5rem' },
              lg: { width: '6rem', height: '6rem' },
              xl: { width: '7rem', height: '7rem' },
              '2xl': { width: '8rem', height: '8rem' },
            },
          },
        })({ size }),
      )}
      {...rest}
    />
  );
};
