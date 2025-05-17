import type { ComponentProps, FC } from 'react';
import { css } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { AttendedEventList } from '../attended-event-list';

export type AttendedEventSection = ComponentProps<'section'>;

export const AttendedEventSection: FC<AttendedEventSection> = ({
  className,
  ...rest
}) => {
  return (
    <section className={className} {...rest}>
      <Heading
        as="h2"
        size="clamp"
        subtitle="さんかいべんと"
        title="参加イベント"
      />
      <div
        className={css({
          display: 'grid',
          paddingBlock: '1rem',
        })}
      >
        <AttendedEventList />
      </div>
    </section>
  );
};
