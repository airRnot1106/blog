import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import type { Err, Ok } from '../result';
import { getOgp } from './ogp';

vi.mock('open-graph-scraper', () => ({
  default: vi.fn(),
}));

import ogs from 'open-graph-scraper';

describe('getOgp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('ogsが成功したらokを返す', async () => {
    expect.assertions(2);
    (ogs as Mock).mockImplementation(() =>
      Promise.resolve({
        error: false,
        result: {
          ogTitle: 'Example Title',
          ogDescription: 'Example Description',
          ogImage: [{ url: 'https://example.com/image.jpg' }],
          ogUrl: 'https://example.com',
        },
        html: '<html></html>',
        response: {
          statusCode: 200,
          headers: {
            'content-type': 'text/html',
          },
        },
      }),
    );

    const result = await getOgp('https://example.com');
    expect(result.ok).toBe(true);
    expect(
      (
        result as Ok<{
          result: {
            ogImage: { url: string };
            ogUrl: string;
            ogTitle: string;
          };
          error: false;
          html: string;
          response: object;
        }>
      ).data.result,
    ).toEqual({
      ogTitle: 'Example Title',
      ogImage: { url: 'https://example.com/image.jpg' },
      ogUrl: 'https://example.com',
    });
  });

  it('ogsが失敗したときにerrを返す', async () => {
    expect.assertions(3);
    (ogs as Mock).mockImplementation(() =>
      Promise.resolve({
        error: true,
        result: null,
        html: null,
        response: {
          statusCode: 500,
          headers: {},
        },
      }),
    );

    const result = await getOgp('https://example.com', {});
    expect(result.ok).toBe(false);
    expect((result as Err<Error>).error).toBeInstanceOf(Error);
    expect((result as Err<Error>).error.message).toBe('failed to get ogp');
  });
});
