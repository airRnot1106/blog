import type { ComponentProps, FC, ReactNode } from 'react';
import { css } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';

export type ArticleSectionProps = ComponentProps<'section'> & {
  children: ReactNode;
};

export const ArticleSection: FC<ArticleSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={className} {...rest}>
      <Heading as="h2" subtitle="わたしがかきました" title="記事一覧" />
      <div
        className={css({
          display: 'grid',
          justifyContent: 'center',
          paddingBlock: '2rem',
        })}
      >
        {children}
      </div>
    </section>
  );
};
