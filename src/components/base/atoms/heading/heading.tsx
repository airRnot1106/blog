import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type HeadingProps = Readonly<
  ComponentProps<'div'> & {
    title: string;
    subtitle: string;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>;

export const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  as,
  className,
  ...rest
}) => {
  const Divider = <div className="divider divider-horizontal" />;

  const Border = (
    <div className="border-t border-t-4 border-t-primary mt-4 w-[min(12rem,100%)]" />
  );

  return (
    <div
      className={twMerge(
        'grid grid-rows-[auto_2px] grid-cols-[auto_auto_1fr] items-center',
        className,
      )}
      {...rest}
    >
      {as === 'h1' && (
        <>
          <h1 className="text-[clamp(1.5rem,1.227rem_+_1.36vw,2.25rem)] font-bold">
            {title}
          </h1>
          {Divider}
          <span className="text-[clamp(1.125rem,0.989rem_+_0.68vw,1.5rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
      {as === 'h2' && (
        <>
          <h2 className="text-[clamp(1.25rem,1.023rem_+_1.14vw,1.875rem)] font-bold">
            {title}
          </h2>
          {Divider}
          <span className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
      {as === 'h3' && (
        <>
          <h3 className="text-[clamp(1.125rem,0.989rem_+_0.68vw,1.5rem)] font-bold">
            {title}
          </h3>
          {Divider}
          <span className="text-[clamp(0.875rem,0.784rem_+_0.45vw,1.125rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
      {as === 'h4' && (
        <>
          <h4 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
            {title}
          </h4>
          {Divider}
          <span className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
      {as === 'h5' && (
        <>
          <h5 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
            {title}
          </h5>
          {Divider}
          <span className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
      {as === 'h6' && (
        <>
          <h6 className="text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] font-bold">
            {title}
          </h6>
          {Divider}
          <span className="text-[clamp(0.75rem,0.659rem_+_0.45vw,1rem)] font-ich1q mt-2">
            {subtitle}
          </span>
          {Border}
        </>
      )}
    </div>
  );
};
