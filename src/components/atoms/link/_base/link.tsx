import { UnderlineLink, type UnderlineLinkProps } from './_variant';

type LinkVariant = 'underline';

export type LinkProps<T extends LinkVariant> = T extends 'underline'
  ? UnderlineLinkProps & { variant: T }
  : never;

export const Link = <T extends LinkVariant>(props: LinkProps<T>) => {
  switch (props.variant) {
    case 'underline': {
      return <UnderlineLink {...props} />;
    }
    default: {
      return props.variant satisfies never;
    }
  }
};
