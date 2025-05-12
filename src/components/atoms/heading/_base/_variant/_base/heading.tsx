import type { ComponentProps, FC } from 'react';
import { css, cva, cx } from '../../../../../../../styled-system/css';

export type HeadingProps = ComponentProps<'hgroup'> & {
  title: string;
  subtitle?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  as,
  className,
  ...rest
}) => {
  const HeadingTag = as;
  return (
    <hgroup
      className={cx(
        className,
        css({
          display: 'inline-grid',
          gridTemplateAreas: `
            "title divider subtitle"
            "border . ."
          `,
          alignItems: 'center',
          columnGap: '1rem',
        }),
      )}
      {...rest}
    >
      <HeadingTag
        className={cva({
          base: {
            gridRow: 'title',
            gridColumn: 'title',
            fontWeight: 'bold',
          },
          variants: {
            as: {
              h1: {
                fontSize: 'clamp(1.5rem, 1.159rem + 1.45vw, 2.25rem)',
              },
              h2: {
                fontSize: 'clamp(1.25rem, 0.966rem + 1.21vw, 1.875rem)',
              },
              h3: {
                fontSize: 'clamp(1.125rem, 0.955rem + 0.73vw, 1.5rem)',
              },
              h4: {
                fontSize: 'clamp(1rem, 0.886rem + 0.48vw, 1.25rem)',
              },
              h5: {
                fontSize: 'clamp(1rem, 0.886rem + 0.48vw, 1.25rem)',
              },
              h6: {
                fontSize: 'clamp(1rem, 0.886rem + 0.48vw, 1.25rem)',
              },
            },
          },
        })({ as })}
        id={title}
      >
        {title}
      </HeadingTag>
      <hr
        className={css({
          gridRow: 'border',
          gridColumn: 'border',
          borderBottom: '2px solid',
          borderColor: 'iris',
          marginTop: '4px',
        })}
      />
      {subtitle && (
        <>
          <hr
            className={css({
              gridRow: 'divider',
              gridColumn: 'divider',
              width: '1px',
              height: '100%',
              color: 'transparent',
              backgroundColor: 'muted/20',
            })}
          />
          <p
            aria-hidden
            className={cva({
              base: {
                gridRow: 'subtitle',
                gridColumn: 'subtitle',
                fontFamily: 'ich1q',
              },
              variants: {
                as: {
                  h1: {
                    fontSize: 'clamp(1.125rem, 0.955rem + 0.73vw, 1.5rem)',
                  },
                  h2: {
                    fontSize: 'clamp(1rem, 0.886rem + 0.48vw, 1.25rem)',
                  },
                  h3: {
                    fontSize: 'clamp(0.875rem, 0.761rem + 0.48vw, 1.125rem)',
                  },
                  h4: {
                    fontSize: 'clamp(0.75rem, 0.636rem + 0.48vw, 1rem)',
                  },
                  h5: {
                    fontSize: 'clamp(0.75rem, 0.636rem + 0.48vw, 1rem)',
                  },
                  h6: {
                    fontSize: 'clamp(0.75rem, 0.636rem + 0.48vw, 1rem)',
                  },
                },
              },
            })({ as })}
          >
            {subtitle}
          </p>
        </>
      )}
    </hgroup>
  );
};
