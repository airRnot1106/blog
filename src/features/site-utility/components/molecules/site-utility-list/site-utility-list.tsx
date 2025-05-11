import { Rss } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import GitHub from '../../../../../assets/svg/github-mark.svg';
import { LinkButton } from '../../../../../components/atoms/link-button';
import { SiteThemeToggleButton } from '../../../../site-theme/components/atoms/site-theme-toggle-button';

export type SiteUtilityListProps = ComponentProps<'ul'>;

export const SiteUtilityList: FC<SiteUtilityListProps> = ({
  className,
  ...rest
}) => {
  return (
    <ul
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          columnGap: {
            base: '0.25rem',
            sm: '0.5rem',
          },
          width: 'fit-content',
          '& > li': {
            display: 'grid',
            alignItems: 'center',
          },
        }),
      )}
      {...rest}
    >
      <li>
        <SiteThemeToggleButton size="md" />
      </li>
      <li>
        <LinkButton
          href="https://github.com/airRnot1106/blog"
          size="md"
          target="_blank"
          variant="ghost"
        >
          <GitHub
            aria-label="GitHub"
            className={css({
              fill: 'currentColor',
            })}
            height="28"
            width="28"
          />
        </LinkButton>
      </li>
      <li>
        <LinkButton href="/articles/feed.xml" size="md" variant="ghost">
          <Rss aria-label="RSS" size="28" />
        </LinkButton>
      </li>
    </ul>
  );
};
