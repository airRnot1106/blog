import { SiGithub } from '@icons-pack/react-simple-icons';
import { Rss } from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
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
          aria-label="GitHub"
          href="https://github.com/airRnot1106/blog"
          size="md"
          target="_blank"
          variant="ghost"
        >
          <SiGithub
            aria-hidden
            className={css({
              fill: 'currentColor',
            })}
            height="28"
            width="28"
          />
        </LinkButton>
      </li>
      <li>
        <LinkButton
          aria-label="RSS"
          href="/articles/feed.xml"
          size="md"
          variant="ghost"
        >
          <Rss size="28" />
        </LinkButton>
      </li>
    </ul>
  );
};
