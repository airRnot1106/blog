import { getZennArticleWithOgpListByUsername } from '@/features/zenn-article/actions';
import { convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList } from '@/features/zenn-article/converters';
import { type ComponentProps, type FC, memo } from 'react';
import { ZennArticleCardListPresentational } from './zenn-article-card-list-presentational';

export type ZennArticleCardListProps = Readonly<
  ComponentProps<'ul'> & {
    username: string;
  }
>;

export const ZennArticleCardList: FC<ZennArticleCardListProps> = memo(
  async ({ username, ...rest }) => {
    const articles = await (async () => {
      const result = await getZennArticleWithOgpListByUsername(username);
      if (!result.ok) {
        return;
      }

      return convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList(
        result.value,
      );
    })();

    return articles != null ? (
      <ZennArticleCardListPresentational articles={articles} {...rest} />
    ) : (
      <p className="py-[clamp(3rem,1.909rem_+_5.45vw,6rem)]">
        記事の取得に失敗しました 😢
      </p>
    );
  },
);
ZennArticleCardList.displayName = 'ZennArticleCardList';
