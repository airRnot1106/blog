import type { ComponentProps } from 'react';

export type SiteTitleProps = Readonly<
  ComponentProps<'div'> & {
    title: string;
    subtitle: string;
  }
>;

export const SiteTitle = ({
  title,
  subtitle,
  className,
  ...rest
}: SiteTitleProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-y-[clamp(0.25rem,-0.023rem_+_1.36vw,1rem)] font-ich1q"
      {...rest}
    >
      <h1 className="text-[clamp(2.25rem,0.886rem_+_6.82vw,6rem)] font-bold">
        {title}
      </h1>
      <span className="text-[clamp(1rem,0.545rem_+_2.27vw,2.25rem)]">
        {subtitle}
      </span>
    </div>
  );
};
