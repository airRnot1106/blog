import type { ComponentProps, FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { isBefore } from '../../../../../utils/date';
import { shouldNeverHappen } from '../../../../../utils/panic-helper';
import { attendedEvents } from '../../../consts';
import { AttendedEventItem } from '../../atoms/attended-event-item';

export type AttendedEventListProps = ComponentProps<'ul'>;

export const AttendedEventList: FC<AttendedEventListProps> = ({
  className,
  ...rest
}) => {
  const events = attendedEvents
    .map(({ title, url, dates }) => ({
      title,
      url,
      dates: dates.map((date) => new Date(date)),
    }))
    .toSorted((a, b) =>
      isBefore(
        a.dates[0] ?? shouldNeverHappen('missing date'),
        b.dates[0] ?? shouldNeverHappen('missing date'),
      )
        ? 1
        : -1,
    );
  return (
    <ul
      className={cx(
        className,
        css({
          display: 'grid',
          gridTemplateColumns: {
            base: 'auto',
            sm: 'repeat(2, auto)',
          },
          justifyContent: 'between',
        }),
      )}
      {...rest}
    >
      {events.map((event) => (
        <li
          className={css({
            display: 'grid',
            gridTemplateColumns: 'subgrid',
            gridColumn: '1 / -1',
            paddingBlock: '1rem',
            '&:not(:last-child)': {
              borderBottom: '1px dotted',
              borderColor: 'muted',
            },
          })}
          key={event.title}
        >
          <AttendedEventItem
            className={css({
              display: 'grid',
              gridTemplateColumns: 'subgrid',
              gridColumn: '1 / -1',
            })}
            {...event}
          />
        </li>
      ))}
    </ul>
  );
};
