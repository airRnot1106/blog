import {
  ErrorFetchResultMessage,
  type ErrorFetchResultMessageProps,
} from './_variant';

export type FetchResultMessageVariant = 'error';

export type FetchResultMessageProps<T extends FetchResultMessageVariant> =
  T extends 'error' ? ErrorFetchResultMessageProps & { variant: T } : never;

export const FetchResultMessage = <T extends FetchResultMessageVariant>(
  props: FetchResultMessageProps<T>,
) => {
  switch (props.variant) {
    case 'error': {
      return <ErrorFetchResultMessage {...props} />;
    }
    default: {
      return props.variant satisfies never;
    }
  }
};
