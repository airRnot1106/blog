import * as fc from 'fast-check';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from 'vitest';
import { shouldNeverHappen } from './panic-helper';

const ORIGINAL_ENV = process.env.NODE_ENV ?? '';

describe('panic-helper', () => {
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    errorSpy.mockRestore();
    // @ts-expect-error
    process.env.NODE_ENV = ORIGINAL_ENV;
    vi.restoreAllMocks();
  });

  describe('shouldNeverHappen()', () => {
    it('任意の環境で常に例外を投げる', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('production', 'development', 'test', 'staging'),
          fc.string({ minLength: 1 }),
          (env, message) => {
            // @ts-expect-error
            process.env.NODE_ENV = env;

            const call = () => shouldNeverHappen(message);

            expect(call).toThrowError(`This should never happen: ${message}`);
            expect(errorSpy).toHaveBeenCalledWith(message);

            errorSpy.mockClear();
          },
        ),
      );
    });

    it('追加パラメータと共に任意の環境で常に例外を投げる', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('production', 'development', 'test'),
          fc.string({ minLength: 1 }),
          fc.record({
            code: fc.integer(),
            data: fc.string(),
            flag: fc.boolean(),
          }),
          (env, message, additionalData) => {
            // @ts-expect-error
            process.env.NODE_ENV = env;

            const call = () => shouldNeverHappen(message, additionalData);

            expect(call).toThrowError(`This should never happen: ${message}`);
            expect(errorSpy).toHaveBeenCalledWith(message, additionalData);

            errorSpy.mockClear();
          },
        ),
      );
    });

    it('戻り値型がneverであることをコンパイル時に保証する', () => {
      type Return = ReturnType<typeof shouldNeverHappen>;
      expectTypeOf<Return>().toEqualTypeOf<never>();
    });

    it('固定値での動作確認', () => {
      // @ts-expect-error
      process.env.NODE_ENV = 'production';
      const call1 = () => shouldNeverHappen('fatal', { code: 123 });
      expect(call1).toThrowError('This should never happen: fatal');
      expect(errorSpy).toHaveBeenCalledWith('fatal', { code: 123 });

      errorSpy.mockClear();

      // @ts-expect-error
      process.env.NODE_ENV = 'development';
      const call2 = () => shouldNeverHappen('dev-path');
      expect(call2).toThrowError('This should never happen: dev-path');
      expect(errorSpy).toHaveBeenCalledWith('dev-path');
    });
  });
});
