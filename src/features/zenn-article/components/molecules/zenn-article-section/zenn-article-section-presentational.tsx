import { Heading } from '@/components/base/atoms/heading';
import type { ZennArticle } from '@/features/zenn-article/schemas';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ZennArticleCardList } from '../zenn-article-card-list';

export type ZennArticleSectionPresentationalProps = Readonly<
  ComponentProps<'section'> & {
    articles: ZennArticle[] | undefined;
  }
>;

export const ZennArticleSectionPresentational: FC<
  ZennArticleSectionPresentationalProps
> = ({ articles, className, ...rest }) => {
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
        {articles != null ? (
          <ZennArticleCardList
            articles={articles}
            className="[&>li:first-child]:ml-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)] [&>li:last-child]:mr-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)]"
          />
        ) : (
          <p className="py-[clamp(3rem,1.909rem_+_5.45vw,6rem)]">
            記事の取得に失敗しました 😢
          </p>
        )}
        <Link
          href="https://zenn.dev/airrnot1106"
          className="btn btn-soft btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          <span className="">もっとみる</span>
          <ChevronRight />
        </Link>
      </div>
    </section>
  );
};
