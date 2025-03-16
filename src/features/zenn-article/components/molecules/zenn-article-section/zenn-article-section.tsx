import { Heading } from '@/components/base/atoms/heading';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { type ComponentProps, type FC, Suspense, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ZennArticleCardList } from '../zenn-article-card-list';

export type ZennArticleSectionProps = Readonly<
  ComponentProps<'section'> & {
    username: string;
  }
>;

export const ZennArticleSection: FC<ZennArticleSectionProps> = memo(
  ({ username, className, ...rest }) => {
    return (
      <section
        className={twMerge(
          'flex flex-col gap-y-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)]',
          className,
        )}
        {...rest}
      >
        <Heading title="技術記事" subtitle="わたしがかきました" as="h2" />
        <div className="flex flex-col gap-y-[clamp(2rem,1.273rem_+_3.64vw,4rem)] items-center">
          <Suspense
            fallback={
              <span className="loading loading-dots loading-md py-[clamp(3rem,1.909rem_+_5.45vw,6rem)]" />
            }
          >
            <ZennArticleCardList
              username={username}
              className="[&>li:first-child]:ml-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)] [&>li:last-child]:mr-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)]"
            />
            <Link
              href="https://zenn.dev/airrnot1106"
              className="btn btn-soft btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            >
              <span>もっとみる</span>
              <ChevronRight />
            </Link>
          </Suspense>
        </div>
      </section>
    );
  },
);
ZennArticleSection.displayName = 'ZennArticleSection';
