'use client';

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { css } from '../../../../../../../styled-system/css';
import { LinkButton } from '../../../../link-button';

export type HPNTPaginationProps = {
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
  currentPage,
  totalPage,
  className,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  params.set('page', '1');
  const head = `${pathname}?${params.toString()}`;
  params.set(
    'page',
    currentPage > totalPage
      ? totalPage.toString()
      : (currentPage - 1).toString(),
  );
  const prev = `${pathname}?${params.toString()}`;
  params.set('page', (currentPage + 1).toString());
  const next = `${pathname}?${params.toString()}`;
  params.set('page', totalPage.toString());
  const tail = `${pathname}?${params.toString()}`;

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
        {currentPage > 1 && (
          <>
            <LinkButton
              aria-label="最初のページへ"
              href={head}
              size={linkButtonSize}
              variant="normal"
            >
              <ChevronFirst className={linkButtonStyle} size={iconSize} />
            </LinkButton>
            <LinkButton
              className={linkButtonStyle}
              href={prev}
              icon={<ChevronLeft size={iconSize} />}
              iconPosition="left"
              size={linkButtonSize}
              variant="normal"
            >
              前のページへ
            </LinkButton>
          </>
        )}
        <span
          className={css({
            fontWeight: 'bold',
          })}
        >
          {currentPage}
        </span>
        {currentPage < totalPage && (
          <>
            <LinkButton
              className={linkButtonStyle}
              href={next}
              icon={<ChevronRight size={iconSize} />}
              iconPosition="right"
              size={linkButtonSize}
              variant="normal"
            >
              次のページへ
            </LinkButton>
            <LinkButton
              aria-label="最後のページへ"
              href={tail}
              size={linkButtonSize}
              variant="normal"
            >
              <ChevronLast className={linkButtonStyle} size={iconSize} />
            </LinkButton>
          </>
        )}
      </div>
    </nav>
  );
};
