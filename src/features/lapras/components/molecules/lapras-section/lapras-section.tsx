import { SquareArrowOutUpRight } from 'lucide-react';
import type { ComponentProps, FC, ReactNode } from 'react';
import { css } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { LinkButton } from '../../../../../components/atoms/link-button';

export type LaprasSectionProps = ComponentProps<'section'> & {
  children: ReactNode;
};

export const LaprasSection: FC<LaprasSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={className} {...rest}>
      <Heading as="h2" size="clamp" subtitle="lapras" title="Lapras" />
      <div
        className={css({
          display: 'grid',
          justifyContent: 'center',
          paddingBlock: '2rem',
        })}
      >
        {children}
      </div>
      <div
        className={css({
          display: 'grid',
          justifyContent: 'center',
        })}
      >
        <LinkButton
          className={css({
            columnGap: '0.5rem',
          })}
          href="https://lapras.com/public/airrnot"
          icon={<SquareArrowOutUpRight size="20" />}
          iconPosition="right"
          target="_blank"
          variant="normal"
        >
          公開ページへ
        </LinkButton>
      </div>
    </section>
  );
};
