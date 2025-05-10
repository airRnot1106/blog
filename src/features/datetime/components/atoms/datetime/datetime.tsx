import type { ComponentProps, FC } from 'react';
import { formatDateToYYYYMMDD } from '../../../../../utils/date';

export type DatetimeProps = Omit<ComponentProps<'time'>, 'dateTime'> & {
  datetime: Date;
};

export const Datetime: FC<DatetimeProps> = ({ datetime, ...rest }) => {
  return (
    <time
      dateTime={formatDateToYYYYMMDD(datetime, { separator: '-' })}
      {...rest}
    >
      {formatDateToYYYYMMDD(datetime)}
    </time>
  );
};
