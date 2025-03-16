import { Heading } from '@/components/base/atoms/heading';
import type { ZennArticle } from '@/features/zenn-article/schemas';
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
      <Heading title="最新記事" subtitle="さいしんきじ" as="h2" />
      <div className="flex flex-col gap-y-4 items-center">
        {articles != null ? (
          <ZennArticleCardList
            articles={articles}
            className="[&>li:first-child]:ml-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)] [&>li:last-child]:mr-[clamp(1.5rem,0.955rem_+_2.73vw,3rem)]"
          />
        ) : (
          <p className="py-[clamp(3rem,1.909rem_+_5.45vw,6rem)]">
            記事がありません
          </p>
        )}
      </div>
    </section>
  );
};
