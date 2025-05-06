import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../../../styled-system/css';

export type ErrorFetchResultMessageProps = ComponentProps<'div'> & {
  children?: ReactNode;
};

export const ErrorFetchResultMessage: FC<ErrorFetchResultMessageProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cx(
        className,
        css({
          display: 'inline-grid',
          placeContent: 'center',
          paddingBlock: '2rem',
          paddingInline: '4rem',
        }),
      )}
      {...rest}
    >
      {children != null ? children : <span>情報の取得に失敗しました</span>}
    </div>
  );
};
