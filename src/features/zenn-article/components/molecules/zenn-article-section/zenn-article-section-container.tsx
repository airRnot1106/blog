import { getZennArticleWithOgpListByUsername } from '@/features/zenn-article/actions';
import { convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList } from '@/features/zenn-article/converters';
import type { ComponentProps } from 'react';
import { ZennArticleSectionPresentational } from './zenn-article-section-presentational';

export type ZennArticleSectionProps = Readonly<
  ComponentProps<'section'> & {
    username: string;
  }
>;

export const ZennArticleSection = async ({
  username,
  ...rest
}: ZennArticleSectionProps) => {
  const articles = await (async () => {
    const result = await getZennArticleWithOgpListByUsername(username);
    if (!result.ok) {
      return;
    }

    return convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList(
      result.value,
    );
  })();

  return <ZennArticleSectionPresentational articles={articles} {...rest} />;
};
