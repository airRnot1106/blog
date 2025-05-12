import { SiHatenabookmark, SiX } from '@icons-pack/react-simple-icons';
import type { ComponentProps, FC } from 'react';
import { css, cva, cx } from '../../../../../../styled-system/css';
import { LinkButton } from '../../../../../components/atoms/link-button';
import { SiteUrlCopyButton } from '../../../../site-url/components/atoms/site-url-copy-button';

export type SocialShareLinkButtonListProps = ComponentProps<'ul'> & {
  direction: 'horizontal' | 'vertical';
  text: string;
  url: string;
};

export const SocialShareLinkButtonList: FC<SocialShareLinkButtonListProps> = ({
  direction,
  text,
  url,
  className,
  ...rest
}) => {
  return (
    <ul
      className={cx(
        className,
        cva({
          base: {
            display: 'inline-grid',
          },
          variants: {
            direction: {
              horizontal: {
                gridAutoFlow: 'column',
                columnGap: '0.5rem',
              },
              vertical: {
                gridAutoFlow: 'row',
                rowGap: '0.5rem',
              },
            },
          },
        })({ direction }),
      )}
      {...rest}
    >
      <li>
        <LinkButton
          aria-label="Xにポストする"
          className={css({
            paddingBlock: '0.5rem',
            paddingInline: '0.5rem',
          })}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
          size="fit-content"
          variant="ghost"
        >
          <SiX aria-hidden size="20" />
        </LinkButton>
      </li>
      <li>
        <LinkButton
          aria-label="はてなブックマークに登録する"
          className={css({
            paddingBlock: '0.5rem',
            paddingInline: '0.5rem',
          })}
          href={`https://b.hatena.ne.jp/entry/panel/?mode=confirm&title=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
          size="fit-content"
          variant="ghost"
        >
          <SiHatenabookmark aria-hidden size="20" />
        </LinkButton>
      </li>
      <li>
        <SiteUrlCopyButton size="20" url={url} />
      </li>
    </ul>
  );
};
