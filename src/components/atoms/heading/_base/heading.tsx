import {
  AnchorHeading,
  type AnchorHeadingProps,
  Heading as BaseHeading,
  type HeadingProps as BaseHeadingProps,
} from './_variant';

type HeadingVariant = 'anchor' | undefined;

export type HeadingProps<T extends HeadingVariant> = T extends 'anchor'
  ? AnchorHeadingProps & { variant: T }
  : BaseHeadingProps & { variant?: T };

export const Heading = <T extends HeadingVariant>(props: HeadingProps<T>) => {
  switch (props.variant) {
    case 'anchor': {
      return <AnchorHeading {...props} />;
    }
    case undefined: {
      return <BaseHeading {...props} />;
    }
    default: {
      return props satisfies never;
    }
  }
};
