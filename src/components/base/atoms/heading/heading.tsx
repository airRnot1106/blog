import { type ComponentProps, type FC, type ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';

export type HeadingProps = Readonly<
  ComponentProps<'hgroup'> & {
    title: string;
    subtitle: string;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>;

const HeaddingWrapper: FC<
  ComponentProps<'hgroup'> & { children: ReactNode }
> = ({ children, className, ...rest }) => {
  return (
    <hgroup
      className={twMerge(
        'grid grid-rows-[auto_2px] grid-cols-[auto_auto_1fr] items-center',
        className,
      )}
      {...rest}
    >
      {children}
    </hgroup>
  );
};

export const Heading: FC<HeadingProps> = memo(
  ({ title, subtitle, as, className, ...rest }) => {
    const Divider = <div className="divider divider-horizontal" />;

    const Border = (
      <div className="border-t border-t-4 border-t-primary mt-4 w-[min(12rem,100%)]" />
    );

    return (
      <>
        {as === 'h1' && (
          <HeaddingWrapper className={className} {...rest}>
            <h1 className="text-[clamp(1.5rem,1.227rem_+_1.36vw,2.25rem)] font-bold">
              {title}
            </h1>
            {Divider}
            <p className="text-[clamp(1.125rem,0.989rem_+_0.68vw,1.5rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
        {as === 'h2' && (
          <HeaddingWrapper className={className} {...rest}>
            <h2 className="text-[clamp(1.25rem,1.023rem_+_1.14vw,1.875rem)] font-bold">
              {title}
            </h2>
            {Divider}
            <p className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
        {as === 'h3' && (
          <HeaddingWrapper className={className} {...rest}>
            <h3 className="text-[clamp(1.125rem,0.989rem_+_0.68vw,1.5rem)] font-bold">
              {title}
            </h3>
            {Divider}
            <p className="text-[clamp(0.875rem,0.784rem_+_0.45vw,1.125rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
        {as === 'h4' && (
          <HeaddingWrapper className={className} {...rest}>
            <h4 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
              {title}
            </h4>
            {Divider}
            <p className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
        {as === 'h5' && (
          <HeaddingWrapper className={className} {...rest}>
            <h5 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
              {title}
            </h5>
            {Divider}
            <p className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
        {as === 'h6' && (
          <HeaddingWrapper className={className} {...rest}>
            <h6 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
              {title}
            </h6>
            {Divider}
            <p className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
              {subtitle}
            </p>
            {Border}
          </HeaddingWrapper>
        )}
      </>
    );
  },
);
Heading.displayName = 'Heading';
