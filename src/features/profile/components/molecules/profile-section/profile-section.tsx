import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { ImageIcon } from '../../../../../components/atoms/image-icon';
import { Link } from '../../../../../components/atoms/link';
import { PROFILE_LINKS } from '../../../consts';

export type ProfileSectionProps = ComponentProps<'section'>;

export const ProfileSection: FC<ProfileSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <section className={cx(className)} {...rest}>
      <Heading as="h2" subtitle="about" title="About" />
      <div
        className={css({
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'center',
          rowGap: '1rem',
          paddingBlock: '1rem',
          borderBottom: '1px solid',
          borderBottomColor: 'muted/20',
        })}
      >
        <ImageIcon
          alt=""
          className={css({
            width: 'clamp(8rem, 4.364rem + 15.52vw, 16rem)',
          })}
          height="300"
          priority
          size="fit-content"
          src="/images/profile/airrnot.webp"
          variant="circle"
          width="300"
        />
        <span
          className={css({
            fontSize: 'clamp(1.5rem, 1.159rem + 1.45vw, 2.25rem)',
            fontWeight: 'bold',
          })}
        >
          airRnot
        </span>
        <p
          className={css({
            fontSize: 'clamp(0.75rem, 0.58rem + 0.73vw, 1.125rem)',
            wordBreak: 'keep-all',
            textAlign: 'center',
          })}
        >
          フロントエンドをメインにやっています
          <br />
          趣味はdotfiles盆栽とディレクトリ構成について考えることです
        </p>
      </div>
      <ul
        className={css({
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'center',
          paddingBlock: '1rem',
        })}
      >
        {PROFILE_LINKS.map(({ label, url }) => (
          <li
            className={css({
              width: 'fit-content',
              '&:not(:last-child)': {
                _after: {
                  content: '"/"',
                  marginInline: '0.5rem',
                },
              },
            })}
            key={label}
          >
            <Link
              className={css({
                fontSize: 'clamp(1rem, 0.886rem + 0.48vw, 1.25rem)',
              })}
              href={url}
              variant="underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
