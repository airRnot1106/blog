import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { FC } from 'react';
import { css } from '../../../../../../../styled-system/css';
import { LinkButton } from '../../../../link-button';

export type HPNTPaginationProps = {
  href: string;
  currentPage: number;
  totalPage: number;
  className?: string | undefined;
};

const linkButtonStyle = css({
  columnGap: '0.5rem',
});

const linkButtonSize = 'sm';

const iconSize = 18;

export const HPNTPagination: FC<HPNTPaginationProps> = ({
  href,
  currentPage,
  totalPage,
  className,
}) => {
  const head = `${href}/1`;
  const prev = `${href}/${currentPage > totalPage ? totalPage : currentPage - 1}`;
  const next = `${href}/${currentPage + 1}`;
  const tail = `${href}/${totalPage}`;

  return (
    <nav className={className}>
      <div
        className={css({
          display: 'inline-grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          columnGap: '1rem',
        })}
      >
        <LinkButton
          aria-label="最初のページへ"
          disabled={currentPage <= 1}
          href={head}
          size={linkButtonSize}
          variant="normal"
        >
          <ChevronFirst className={linkButtonStyle} size={iconSize} />
        </LinkButton>
        <LinkButton
          className={linkButtonStyle}
          disabled={currentPage <= 1}
          href={prev}
          icon={<ChevronLeft size={iconSize} />}
          iconPosition="left"
          size={linkButtonSize}
          variant="normal"
        >
          <span
            className={css({
              hideBelow: 'sm',
            })}
          >
            前のページへ
          </span>
        </LinkButton>
        <span
          className={css({
            fontWeight: 'bold',
          })}
        >
          {currentPage}
        </span>
        <LinkButton
          className={linkButtonStyle}
          disabled={currentPage >= totalPage}
          href={next}
          icon={<ChevronRight size={iconSize} />}
          iconPosition="right"
          size={linkButtonSize}
          variant="normal"
        >
          <span
            className={css({
              hideBelow: 'sm',
            })}
          >
            次のページへ
          </span>
        </LinkButton>
        <LinkButton
          aria-label="最後のページへ"
          disabled={currentPage >= totalPage}
          href={tail}
          size={linkButtonSize}
          variant="normal"
        >
          <ChevronLast className={linkButtonStyle} size={iconSize} />
        </LinkButton>
      </div>
    </nav>
  );
};
