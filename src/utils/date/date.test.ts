import * as fc from 'fast-check';
import { describe, expect, it } from 'vitest';
import {
  formatDateToRFC822,
  formatDateToYYYYMMDD,
  isAfter,
  isBefore,
} from './date';

describe('date', () => {
  describe('formatDateToYYYYMMDD()', () => {
    it('常にYYYY/MM/DD形式の文字列を返す', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-31').getTime(),
            })
            .map((t) => new Date(t)),
          (date) => {
            const result = formatDateToYYYYMMDD(date);
            expect(result).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
          },
        ),
      );
    });

    it('セパレータオプションが正しく適用される', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-31').getTime(),
            })
            .map((t) => new Date(t)),
          fc.constantFrom('-', '.', '/', '_'),
          (date, separator) => {
            const result = formatDateToYYYYMMDD(date, { separator });
            const pattern = new RegExp(
              `^\\d{4}\\${separator}\\d{2}\\${separator}\\d{2}$`,
            );
            expect(result).toMatch(pattern);
          },
        ),
      );
    });

    it('固定値での動作確認', () => {
      const date = new Date('2023-10-01T00:00:00Z');
      expect(formatDateToYYYYMMDD(date)).toEqual('2023/10/01');
      expect(formatDateToYYYYMMDD(date, { separator: '-' })).toEqual(
        '2023-10-01',
      );
      expect(formatDateToYYYYMMDD(date, { separator: '.' })).toEqual(
        '2023.10.01',
      );
    });
  });

  describe('formatDateToRFC822()', () => {
    it('常にRFC822形式の文字列を返す', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-31').getTime(),
            })
            .map((t) => new Date(t)),
          (date) => {
            const result = formatDateToRFC822(date);
            expect(result).toMatch(
              /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4}$/,
            );
          },
        ),
      );
    });

    it('固定値での動作確認', () => {
      const date = new Date('2023-10-01T00:00:00+09:00');
      const result = formatDateToRFC822(date);
      expect(result).toEqual('Sun, 01 Oct 2023 00:00:00 +0900');
    });
  });

  describe('isBefore()', () => {
    it('異なる二つの日付で正しく比較される', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-30').getTime(),
            })
            .map((t) => new Date(t)),
          fc.integer({ min: 1, max: 1000 * 60 * 60 * 24 }), // 1日以内のミリ秒差
          (baseDate, timeDiff) => {
            const laterDate = new Date(baseDate.getTime() + timeDiff);
            expect(isBefore(baseDate, laterDate)).toBe(true);
            expect(isBefore(laterDate, baseDate)).toBe(false);
          },
        ),
      );
    });

    it('同じ日時では常にfalse', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-31').getTime(),
            })
            .map((t) => new Date(t)),
          (date) => {
            expect(isBefore(date, date)).toBe(false);
            expect(
              isBefore(new Date(date.getTime()), new Date(date.getTime())),
            ).toBe(false);
          },
        ),
      );
    });

    it('固定値での動作確認', () => {
      const past = new Date('2023-01-01');
      const future = new Date('2023-12-31');
      const same = new Date('2023-01-01T00:00:00Z');

      expect(isBefore(past, future)).toBe(true);
      expect(isBefore(future, past)).toBe(false);
      expect(isBefore(same, new Date('2023-01-01T00:00:00Z'))).toBe(false);
    });
  });

  describe('isAfter()', () => {
    it('異なる二つの日付で正しく比較される', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-30').getTime(),
            })
            .map((t) => new Date(t)),
          fc.integer({ min: 1, max: 1000 * 60 * 60 * 24 }), // 1日以内のミリ秒差
          (baseDate, timeDiff) => {
            const laterDate = new Date(baseDate.getTime() + timeDiff);
            expect(isAfter(laterDate, baseDate)).toBe(true);
            expect(isAfter(baseDate, laterDate)).toBe(false);
          },
        ),
      );
    });

    it('同じ日時では常にfalse', () => {
      fc.assert(
        fc.property(
          fc
            .integer({
              min: new Date('1900-01-01').getTime(),
              max: new Date('2099-12-31').getTime(),
            })
            .map((t) => new Date(t)),
          (date) => {
            expect(isAfter(date, date)).toBe(false);
            expect(
              isAfter(new Date(date.getTime()), new Date(date.getTime())),
            ).toBe(false);
          },
        ),
      );
    });

    it('固定値での動作確認', () => {
      const past = new Date('2023-01-01');
      const future = new Date('2024-01-01');
      const same = new Date('2023-01-01T00:00:00Z');

      expect(isAfter(future, past)).toBe(true);
      expect(isAfter(past, future)).toBe(false);
      expect(isAfter(same, new Date('2023-01-01T00:00:00Z'))).toBe(false);
    });
  });

  describe('日付比較の数学的性質', () => {
    const validDate = fc
      .integer({
        min: new Date('1900-01-01').getTime(),
        max: new Date('2099-12-31').getTime(),
      })
      .map((t) => new Date(t));

    it('三分律: 任意の二つの日付について、a < b, a = b, a > b のいずれか一つが成り立つ', () => {
      fc.assert(
        fc.property(validDate, validDate, (a, b) => {
          const before = isBefore(a, b);
          const after = isAfter(a, b);
          const equal = a.getTime() === b.getTime();

          const results = [before, after, equal].filter(Boolean);
          expect(results).toHaveLength(1);
        }),
      );
    });

    it('対称性: isBefore(a, b) === isAfter(b, a)', () => {
      fc.assert(
        fc.property(validDate, validDate, (a, b) => {
          expect(isBefore(a, b)).toBe(isAfter(b, a));
        }),
      );
    });

    it('推移律: a < b かつ b < c ならば a < c', () => {
      fc.assert(
        fc.property(validDate, validDate, validDate, (a, b, c) => {
          if (isBefore(a, b) && isBefore(b, c)) {
            expect(isBefore(a, c)).toBe(true);
          }
          if (isAfter(a, b) && isAfter(b, c)) {
            expect(isAfter(a, c)).toBe(true);
          }
        }),
      );
    });

    it('反射律: 同じ日付同士の比較では常にfalse', () => {
      fc.assert(
        fc.property(validDate, (date) => {
          expect(isBefore(date, date)).toBe(false);
          expect(isAfter(date, date)).toBe(false);
        }),
      );
    });
  });
});
