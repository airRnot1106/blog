import type { FC, ReactNode } from 'react';
import { FetchResultMessage, type FetchResultMessageProps } from '../_abstract';

export type ErrorFetchResultMessageProps = Omit<
  FetchResultMessageProps,
  'children'
> & {
  children?: ReactNode;
};

export const ErrorFetchResultMessage: FC<ErrorFetchResultMessageProps> = ({
  children,
  ...rest
}) => {
  return (
    <FetchResultMessage {...rest}>
      {children != null ? children : <span>情報の取得に失敗しました</span>}
    </FetchResultMessage>
  );
};
