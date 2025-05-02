import type { FC } from 'react';
import { ImageIcon, type ImageIconProps } from '../_abstract';

export type SquareImageIconProps = ImageIconProps;

export const SquareImageIcon: FC<SquareImageIconProps> = (props) => {
  return <ImageIcon {...props} />;
};
