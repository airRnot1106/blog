import { describe, expect, it } from 'vitest';
import { convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList } from './converters';
import type { GetZennArticleWithOgpListByUsernameResponse } from './schemas';

describe('convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList', () => {
  it('should convert a valid response to a list of ZennArticle', () => {
    const response: GetZennArticleWithOgpListByUsernameResponse = {
      articles: [
        {
          id: 1,
          post_type: 'Article',
          title: 'Test Article',
          slug: 'test-article',
          comments_count: 0,
          liked_count: 10,
          bookmarked_count: 5,
          body_letters_count: 1000,
          article_type: 'tech',
          emoji: '🔥',
          is_suspending_private: false,
          published_at: new Date('2024-01-01T12:00:00Z'),
          body_updated_at: new Date('2024-01-02T12:00:00Z'),
          source_repo_updated_at: null,
          pinned: false,
          path: '/user/test-article',
          user: {
            id: 123,
            username: 'test_user',
            name: 'Test User',
            avatar_small_url: 'https://example.com/avatar.jpg',
          },
          publication: null,
          html: {
            title: 'Test Article',
            description: 'This is a test article',
          },
          ogp: {
            'og:url': ['https://zenn.dev/user/test-article'],
            'og:title': ['Test Article'],
            'og:image': ['https://example.com/image.jpg'],
            'og:type': ['article'],
            'og:site_name': ['Zenn'],
          },
        },
      ],
      next_page: null,
    };

    const result =
      convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList(
        response,
      );

    expect(result).toEqual([
      {
        id: 1,
        title: 'Test Article',
        slug: 'test-article',
        url: 'https://zenn.dev/user/test-article',
        imageUrl: 'https://example.com/image.jpg',
        publishedAt: new Date('2024-01-01T12:00:00Z'),
        updatedAt: new Date('2024-01-02T12:00:00Z'),
      },
    ]);
  });

  it('should return an empty array when there are no articles', () => {
    const response: GetZennArticleWithOgpListByUsernameResponse = {
      articles: [],
      next_page: null,
    };

    const result =
      convertGetZennArticleWithOgpListByUsernameResponseToZennArticleList(
        response,
      );

    expect(result).toEqual([]);
  });
});
