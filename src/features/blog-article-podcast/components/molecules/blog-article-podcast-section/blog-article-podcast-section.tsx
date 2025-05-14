import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../styled-system/css';

export type BlogArticlePodcastSectionProps = ComponentProps<'section'> & {
  heading: ReactNode;
  audio: ReactNode;
};

export const BlogArticlePodcastSection: FC<BlogArticlePodcastSectionProps> = ({
  heading,
  audio,
  className,
  ...rest
}) => {
  return (
    <section
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'flex-start',
          rowGap: '1rem',
        }),
      )}
      {...rest}
    >
      {heading}
      <p
        className={css({
          fontSize: 'sm',
        })}
      >
        Presented by NotebookLM
        <br />
        内容は正確ではない可能性があります。
      </p>
      <div
        className={css({
          justifySelf: 'center',
          width: '100%',
          '& > audio': {
            width: '100%',
          },
        })}
      >
        {audio}
      </div>
    </section>
  );
};
