import * as fc from 'fast-check';
import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import { getOgp } from './ogp';

vi.mock('open-graph-scraper', () => ({
  default: vi.fn(),
}));

import ogs from 'open-graph-scraper';

describe('ogp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getOgp()', () => {
    it('OGSが成功したら常にokを返す', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.webUrl(),
          fc.string({ minLength: 1 }),
          fc.webUrl(),
          fc.webUrl(),
          async (url, title, ogUrl, imageUrl) => {
            (ogs as Mock).mockImplementation(() =>
              Promise.resolve({
                error: false,
                result: {
                  ogTitle: title,
                  ogUrl: ogUrl,
                  ogImage: [{ url: imageUrl }],
                },
                html: '<html></html>',
                response: {
                  statusCode: 200,
                  headers: { 'content-type': 'text/html' },
                },
              }),
            );

            const result = await getOgp(url);

            expect(result.ok).toBe(true);
            if (result.ok) {
              expect(result.data.result.ogTitle).toBe(title);
              expect(result.data.result.ogUrl).toBe(ogUrl);
              expect(result.data.result.ogImage.url).toBe(imageUrl);
            }
          },
        ),
        { numRuns: 5 }, // Reduce runs for async tests
      );
    });

    it('OGSがエラーを返したら常にerrを返す', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.webUrl(),
          fc.integer({ min: 400, max: 599 }),
          async (url, statusCode) => {
            (ogs as Mock).mockImplementation(() =>
              Promise.resolve({
                error: true,
                result: null,
                html: null,
                response: {
                  statusCode,
                  headers: {},
                },
              }),
            );

            const result = await getOgp(url);

            expect(result.ok).toBe(false);
            if (!result.ok) {
              expect(result.error).toBeInstanceOf(Error);
              expect(result.error.message).toBe('failed to get ogp');
            }
          },
        ),
        { numRuns: 5 },
      );
    });

    it('無効なOGPデータの場合はパースエラーでerrを返す', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.webUrl(),
          fc.oneof(
            fc.constant({}), // Empty object
            fc.record({ ogTitle: fc.string() }), // Missing required fields
            fc.record({ ogUrl: fc.string() }), // Invalid URL
          ),
          async (url, invalidOgpData) => {
            (ogs as Mock).mockImplementation(() =>
              Promise.resolve({
                error: false,
                result: invalidOgpData,
                html: '<html></html>',
                response: {
                  statusCode: 200,
                  headers: { 'content-type': 'text/html' },
                },
              }),
            );

            const result = await getOgp(url);

            expect(result.ok).toBe(false);
            if (!result.ok) {
              expect(result.error).toBeInstanceOf(Error);
              expect(result.error.message).toBe('failed to parse ogp');
            }
          },
        ),
        { numRuns: 5 },
      );
    });

    it('固定値での動作確認', async () => {
      // Success case
      (ogs as Mock).mockImplementation(() =>
        Promise.resolve({
          error: false,
          result: {
            ogTitle: 'Example Title',
            ogUrl: 'https://example.com',
            ogImage: [{ url: 'https://example.com/image.jpg' }],
          },
          html: '<html></html>',
          response: {
            statusCode: 200,
            headers: { 'content-type': 'text/html' },
          },
        }),
      );

      const successResult = await getOgp('https://example.com');
      expect(successResult.ok).toBe(true);
      if (successResult.ok) {
        expect(successResult.data.result).toEqual({
          ogTitle: 'Example Title',
          ogUrl: 'https://example.com',
          ogImage: { url: 'https://example.com/image.jpg' },
        });
      }

      // Error case
      (ogs as Mock).mockImplementation(() =>
        Promise.resolve({
          error: true,
          result: null,
          html: null,
          response: { statusCode: 500, headers: {} },
        }),
      );

      const errorResult = await getOgp('https://example.com');
      expect(errorResult.ok).toBe(false);
      if (!errorResult.ok) {
        expect(errorResult.error.message).toBe('failed to get ogp');
      }
    });
  });
});
