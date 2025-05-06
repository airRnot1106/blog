import Image, { type ImageProps } from 'next/image';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';

export type LaprasImagePresentationalProps = Omit<
  ImageProps & ComponentProps<'img'>,
  'alt' | 'height' | 'width'
>;

export const LaprasImagePresentational: FC<LaprasImagePresentationalProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      alt=""
      className={cx(
        className,
        css({
          objectFit: 'cover',
          aspectRatio: '1.91',
          borderRadius: 'md',
          boxShadow: 'md',
        }),
      )}
      height="402"
      width="768"
      {...rest}
    />
  );
};
