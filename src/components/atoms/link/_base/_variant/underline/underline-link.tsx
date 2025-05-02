import type { FC } from 'react';
import { css, cx } from '../../../../../../../styled-system/css';
import { Link, type LinkProps } from '../_abstract';

export type UnderlineLinkProps = LinkProps;

export const UnderlineLink: FC<UnderlineLinkProps> = ({
  className,
  ...rest
}) => {
  return (
    <Link
      className={cx(
        className,
        css({
          textDecoration: 'underline',
          textUnderlineOffset: '0.2em',
          textDecorationThickness: '0.1em',
          textDecorationColor: 'currentColor',
          '&:hover': {
            textUnderlineOffset: '0.3em',
          },
        }),
      )}
      {...rest}
    />
  );
};
