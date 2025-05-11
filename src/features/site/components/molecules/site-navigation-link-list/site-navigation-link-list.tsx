import {
  AnchorSiteNavigationLinkList,
  type AnchorSiteNavigationLinkListProps,
  ButtonSiteNavigationLinkList,
  type ButtonSiteNavigationLinkListProps,
} from './_variant';

type SiteNavigationLinkListVariant = 'anchor' | 'button';

export type SiteNavigationLinkListProps<
  T extends SiteNavigationLinkListVariant,
> = T extends 'anchor'
  ? AnchorSiteNavigationLinkListProps & { variant: T }
  : T extends 'button'
    ? ButtonSiteNavigationLinkListProps & { variant: T }
    : never;

export const SiteNavigationLinkList = <T extends SiteNavigationLinkListVariant>(
  props: SiteNavigationLinkListProps<T>,
) => {
  switch (props.variant) {
    case 'anchor': {
      return <AnchorSiteNavigationLinkList {...props} />;
    }
    case 'button': {
      return <ButtonSiteNavigationLinkList {...props} />;
    }
    default: {
      return props satisfies never;
    }
  }
};
