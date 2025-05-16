import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../../../styled-system/css';

export type FetchResultMessageProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export const FetchResultMessage: FC<FetchResultMessageProps> = ({
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
      {children}
    </div>
  );
};
