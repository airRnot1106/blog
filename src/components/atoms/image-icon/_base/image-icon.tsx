import {
  CircleImageIcon,
  type CircleImageIconProps,
  SquareImageIcon,
  type SquareImageIconProps,
} from './_variant';

type ImageIconVariant = 'circle' | 'square';

export type ImageIconProps<T extends ImageIconVariant> = T extends 'circle'
  ? CircleImageIconProps & { variant: T }
  : T extends 'square'
    ? SquareImageIconProps & { variant: T }
    : never;

export const ImageIcon = <T extends ImageIconVariant>(
  props: ImageIconProps<T>,
) => {
  switch (props.variant) {
    case 'circle': {
      return <CircleImageIcon {...props} />;
    }
    case 'square': {
      return <SquareImageIcon {...props} />;
    }
    default: {
      return props satisfies never;
    }
  }
};
