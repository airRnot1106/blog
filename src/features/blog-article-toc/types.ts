import type { Heading } from 'extract-md-headings';

export type TocHeading = Heading & {
  children: TocHeading[];
};
