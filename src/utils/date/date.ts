import { format } from 'date-fns';

export const formatDateToYYYYMMDD = (
  date: Date,
  options?: {
    separator?: string;
  },
) => {
  const { separator = '/' } = options ?? {};
  const formatString = ['yyyy', 'MM', 'dd'].join(separator);
  return format(date, formatString);
};

export const isBefore = (a: Date, b: Date) => {
  return a.getTime() < b.getTime();
};

export const isAfter = (a: Date, b: Date) => {
  return a.getTime() > b.getTime();
};
