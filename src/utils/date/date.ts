import { formatInTimeZone } from 'date-fns-tz';

export const formatDateToYYYYMMDD = (
  date: Date,
  options?: {
    separator?: string;
  },
) => {
  const { separator = '/' } = options ?? {};
  const formatString = ['yyyy', 'MM', 'dd'].join(separator);
  return formatInTimeZone(date, 'Asia/Tokyo', formatString);
};

export const formatDateToRFC822 = (date: Date) => {
  return formatInTimeZone(date, 'Asia/Tokyo', 'EEE, dd MMM yyyy HH:mm:ss xx');
};

export const isBefore = (a: Date, b: Date) => {
  return a.getTime() < b.getTime();
};

export const isAfter = (a: Date, b: Date) => {
  return a.getTime() > b.getTime();
};
