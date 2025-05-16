import {
  ErrorFetchResultMessage,
  type ErrorFetchResultMessageProps,
  NotFoundFetchResultMessage,
  type NotFoundFetchResultMessageProps,
} from './_variant';

export type FetchResultMessageVariant = 'error' | 'not-found';

export type FetchResultMessageProps<T extends FetchResultMessageVariant> =
  T extends 'error'
    ? ErrorFetchResultMessageProps & { variant: T }
    : T extends 'not-found'
      ? NotFoundFetchResultMessageProps & { variant: T }
      : never;

export const FetchResultMessage = <T extends FetchResultMessageVariant>(
  props: FetchResultMessageProps<T>,
) => {
  switch (props.variant) {
    case 'error': {
      return <ErrorFetchResultMessage {...props} />;
    }
    case 'not-found': {
      return <NotFoundFetchResultMessage {...props} />;
    }
    default: {
      return props satisfies never;
    }
  }
};
