import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Link } from '../../../../../components/atoms/link';
import { isAfter, isBefore } from '../../../../../utils/date';
import { shouldNeverHappen } from '../../../../../utils/panic-helper';
import { Datetime } from '../../../../datetime/components/atoms/datetime';

export type AttendedEventItemProps = ComponentProps<'div'> & {
  title: string;
  url: string;
  dates: Date[];
};

export const AttendedEventItem: FC<AttendedEventItemProps> = ({
  title,
  url,
  dates,
  className,
  ...rest
}) => {
  const sortedDates = dates.toSorted((a, b) => (isAfter(a, b) ? 1 : -1));
  return (
    <div
      className={cx(
        className,
        css({
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: '2rem',
        }),
      )}
      {...rest}
    >
      <div>
        {sortedDates.map((date) => (
          <Datetime
            className={css({
              '&:not(:last-child)': {
                _after: {
                  content: '","',
                  marginInline: '0.25rem',
                },
              },
            })}
            datetime={date}
            key={date.toISOString()}
          />
        ))}
      </div>
      <span
        className={css({
          display: 'inline-flex',
          columnGap: '0.5rem',
        })}
      >
        <Link href={url} target="_blank" variant="underline">
          {title}
        </Link>
        に参加
        {isBefore(
          sortedDates.at(-1) ?? shouldNeverHappen('missing date'),
          new Date(),
        )
          ? 'しました'
          : 'します'}
        ！
      </span>
    </div>
  );
};
