import { Heading } from '@/components/base/atoms/heading';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelfIntroductionSectionProps = Readonly<ComponentProps<'section'>>;

export const SelfIntroductionSection: FC<SelfIntroductionSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <section className={twMerge('flex flex-col gap-y-4', className)} {...rest}>
      <Heading title="About" subtitle="About" as="h2" />
      <div className="flex flex-col gap-y-4 items-center">
        <div className="avatar">
          <div className="w-[clamp(8rem,5.091rem_+_14.55vw,16rem)] rounded-full">
            <Image
              src="https://github.com/airRnot1106.png"
              width="288"
              height="288"
              alt=""
              priority
            />
          </div>
        </div>
        <p className="text-[clamp(1.5rem,1.227rem_+_1.36vw,2.25rem)] font-bold">
          airRnot
        </p>
        <p className="text-[clamp(0.75rem,0.614rem_+_0.68vw,1.125rem)] text-center">
          フロントエンドをメインにやっています
          <br />
          趣味はdotfiles盆栽とディレクトリ構造について考えることです
        </p>
        <div className="border-t border-t-muted/20 w-[min(40rem,80%)]" />
        <nav>
          <ul className="flex items-center justify-center text-[clamp(1rem,0.909rem_+_0.45vw,1.25rem)] [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:mx-2">
            <li>
              <Link href="https://github.com/airRnot1106" className="btn-link">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://bsky.app/profile/airrnot.bsky.social"
                className="btn-link"
              >
                Bluesky
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/airrnot1106" className="btn-link">
                Zenn
              </Link>
            </li>
            <li>
              <Link href="https://qiita.com/airRnot1106" className="btn-link">
                Qiita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
