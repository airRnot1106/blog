import { HPNTPagination, type HPNTPaginationProps } from './_variant';

type PaginationVariant = 'h-p-n-t';

export type PaginationProps<T extends PaginationVariant> = T extends 'h-p-n-t'
  ? HPNTPaginationProps & { variant: T }
  : never;

export const Pagination = <T extends PaginationVariant>(
  props: PaginationProps<T>,
) => {
  switch (props.variant) {
    case 'h-p-n-t': {
      return <HPNTPagination {...props} />;
    }
    default: {
      return props.variant satisfies never;
    }
  }
};
