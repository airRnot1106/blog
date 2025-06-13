import * as fc from 'fast-check';
import { describe, expect, expectTypeOf, it, vi } from 'vitest';
import {
  type Err,
  err,
  mapResult,
  matchResult,
  type Ok,
  ok,
  type Result,
  unsafeUnwrapResult,
} from './result';

describe('Result型', () => {
  it('ok()はOk型を返す', () => {
    fc.assert(
      fc.property(fc.integer(), (value) => {
        const result = ok(value);
        expect(result).toEqual({ ok: true, data: value });
        expectTypeOf(result).toEqualTypeOf<Ok<number>>();
      }),
    );
  });

  it('err()はErr型を返す', () => {
    fc.assert(
      fc.property(fc.string(), (message) => {
        const error = new Error(message);
        const result = err(error);
        expect(result).toEqual({ ok: false, error });
        expectTypeOf(result).toEqualTypeOf<Err<Error>>();
      }),
    );
  });

  describe('mapResult()', () => {
    it('Okを受け取った場合はfnを適用し、Ok<U>を返す', () => {
      fc.assert(
        fc.property(fc.integer(), fc.integer(), (value, addValue) => {
          const initial = ok(value);
          const fn = vi.fn((n: number) => `${n + addValue}`);

          const result = mapResult(initial, fn);

          expect(result).toEqual(ok(`${value + addValue}`));
          expect(fn).toHaveBeenCalledWith(value);
          expectTypeOf(result).toEqualTypeOf<Result<string, unknown>>();
        }),
      );
    });

    it('Errを受け取った場合はfnを呼ばずにそのまま返す', () => {
      fc.assert(
        fc.property(fc.string(), fc.integer(), (message, addValue) => {
          const error = new Error(message);
          const initial = err(error);
          const fn = vi.fn((n: number) => `${n + addValue}`);

          const result = mapResult(initial, fn);

          expect(result).toEqual(err(error));
          expect(fn).not.toHaveBeenCalled();
          expectTypeOf(result).toEqualTypeOf<Result<string, Error>>();
        }),
      );
    });
  });

  describe('matchResult()', () => {
    it('Okを受け取った場合はsuccessFnを呼び、その結果を返す', () => {
      fc.assert(
        fc.property(fc.integer(), fc.integer(), (value, multiplier) => {
          const initial = ok(value);
          const matchper = vi.fn((n: number) => n * multiplier);
          const errorHandler = vi.fn((e: Error) => {
            throw e;
          });

          const matchped = matchResult(initial, matchper, errorHandler);
          expect(matchped).toBe(value * multiplier);
          expect(matchper).toHaveBeenCalledWith(value);
          expect(errorHandler).not.toHaveBeenCalled();
          expectTypeOf(matchped).toEqualTypeOf<number>();
        }),
      );
    });

    it('Errを受け取った場合はerrorFnを呼び、その結果を返す', () => {
      fc.assert(
        fc.property(fc.string(), fc.integer(), (message, multiplier) => {
          const initial = err(new Error(message));
          const matchper = vi.fn((n: number) => n * multiplier);
          const errorHandler = vi.fn((e: Error) => e);

          const matchped = matchResult(initial, matchper, errorHandler);
          expect(matchped).toBe(initial.error);
          expect(matchper).not.toHaveBeenCalled();
          expect(errorHandler).toHaveBeenCalledWith(initial.error);
          expectTypeOf(matchped).toEqualTypeOf<number | Error>();
        }),
      );
    });
  });

  describe('unwrapResult()', () => {
    it('Okを受け取った場合は[data, undefined]のタプルを返す', () => {
      fc.assert(
        fc.property(fc.integer(), (value) => {
          const result = unsafeUnwrapResult(ok(value));

          expect(result).toEqual([value, undefined]);
        }),
      );
    });

    it('Errを受け取った場合は[undefined, error]のタプルを返す', () => {
      fc.assert(
        fc.property(fc.string(), (message) => {
          const error = new Error(message);
          const result = unsafeUnwrapResult(err(error));

          expect(result).toEqual([undefined, error]);
        }),
      );
    });

    it('片方の値の型が確定した時点で、もう片方の値の型が確定する', () => {
      fc.assert(
        fc.property(fc.integer(), (value) => {
          const result = unsafeUnwrapResult<number, string>(ok(value));

          const [data, error] = result;

          if (error == null) {
            expectTypeOf(data).toEqualTypeOf<number>();
            expectTypeOf(error).toEqualTypeOf<undefined>();
          }
        }),
      );
    });
  });
});
