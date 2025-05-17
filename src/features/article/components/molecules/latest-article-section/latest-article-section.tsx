import { ArrowRight } from 'lucide-react';
import type { ComponentProps, FC, ReactNode } from 'react';
import { css } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { LinkButton } from '../../../../../components/atoms/link-button';

export type LatestArticleSectionProps = ComponentProps<'section'> & {
  children: ReactNode;
};

export const LatestArticleSection: FC<LatestArticleSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={className} {...rest}>
      <Heading
        as="h2"
        size="clamp"
        subtitle="さいきんかいたやつ"
        title="最新の記事"
      />
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
          href="/articles/page/1"
          icon={<ArrowRight />}
          iconPosition="right"
          variant="normal"
        >
          もっとみる
        </LinkButton>
      </div>
    </section>
  );
};
