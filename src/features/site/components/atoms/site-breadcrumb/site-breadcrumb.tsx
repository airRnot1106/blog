import type { ComponentProps, FC } from 'react';
import { css } from '../../../../../../styled-system/css';
import { LinkButton } from '../../../../../components/atoms/link-button';

export type SiteBreadcrumbProps = ComponentProps<'nav'> & {
  items: {
    label: string;
    href: string;
  }[];
};

export const SiteBreadcrumb: FC<SiteBreadcrumbProps> = ({
  items,
  className,
  ...rest
}) => {
  return (
    <nav className={className} {...rest}>
      <ul
        className={css({
          display: 'inline-grid',
          gridAutoFlow: 'column',
          columnGap: '0.25rem',
        })}
      >
        {items.map(({ label, href }) => (
          <li
            className={css({
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-child)': {
                _after: {
                  content: '""',
                  display: 'inline-block',
                  maskImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtaWNvbiBsdWNpZGUtY2hldnJvbi1yaWdodCI+PHBhdGggZD0ibTkgMTggNi02LTYtNiIvPjwvc3ZnPg==")',
                  WebkitMaskImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtaWNvbiBsdWNpZGUtY2hldnJvbi1yaWdodCI+PHBhdGggZD0ibTkgMTggNi02LTYtNiIvPjwvc3ZnPg==")',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: 'currentColor',
                  width: '1em',
                  height: '1em',
                  marginTop: '2px',
                },
              },
            })}
            key={href}
          >
            <LinkButton href={href} size="sm" variant="ghost">
              <span
                className={css({
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                })}
              >
                {label}
              </span>
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};
