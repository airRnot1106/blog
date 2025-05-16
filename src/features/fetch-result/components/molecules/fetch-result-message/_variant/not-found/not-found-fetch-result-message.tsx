import { CircleAlert } from 'lucide-react';
import type { FC, ReactNode } from 'react';
import { css } from '../../../../../../../../styled-system/css';
import { FetchResultMessage, type FetchResultMessageProps } from '../_abstract';

export type NotFoundFetchResultMessageProps = Omit<
  FetchResultMessageProps,
  'children'
> & {
  target?: string;
  children?: ReactNode;
};

export const NotFoundFetchResultMessage: FC<
  NotFoundFetchResultMessageProps
> = ({ target, children, ...rest }) => {
  return (
    <FetchResultMessage {...rest}>
      {children != null ? (
        children
      ) : (
        <span
          className={css({
            display: 'inline-grid',
            gridAutoFlow: 'column',
            alignItems: 'center',
            columnGap: '1rem',
          })}
        >
          <CircleAlert /> {target}が見つかりませんでした
        </span>
      )}
    </FetchResultMessage>
  );
};
