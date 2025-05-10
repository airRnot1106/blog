import { describe, expect, it } from 'vitest';
import {
  formatDateToRFC822,
  formatDateToYYYYMMDD,
  isAfter,
  isBefore,
} from './date';

describe('formatDate', () => {
  describe('formatDateToYYYYMMDD', () => {
    it('yyyy/MM/dd形式でフォーマットされる', () => {
      expect.assertions(1);
      const date = new Date('2023-10-01T00:00:00Z');
      const result = formatDateToYYYYMMDD(date);
      expect(result).toEqual('2023/10/01');
    });

    it.each([
      {
        separator: '-',
      },
      {
        separator: '.',
      },
    ])(
      'yyyy $separator MM $separator dd形式でフォーマットされる',
      ({ separator }) => {
        expect.assertions(1);
        const date = new Date('2023-10-01T00:00:00Z');
        const result = formatDateToYYYYMMDD(date, { separator });
        expect(result).toEqual(`2023${separator}10${separator}01`);
      },
    );
  });

  describe('formatDateToRFC822', () => {
    it('RFC822形式でフォーマットされる', () => {
      expect.assertions(1);
      const date = new Date('2023-10-01T00:00:00+09:00');
      const result = formatDateToRFC822(date);
      expect(result).toEqual('Sun, 01 Oct 2023 00:00:00 +0900');
    });
  });

  describe('isBefore', () => {
    it('前者が後者より過去ならtrue', () => {
      const a = new Date('2023-01-01');
      const b = new Date('2023-12-31');
      expect(isBefore(a, b)).toBe(true);
    });

    it('前者が後者と同じ日時ならfalse', () => {
      const a = new Date('2023-01-01T00:00:00Z');
      const b = new Date('2023-01-01T00:00:00Z');
      expect(isBefore(a, b)).toBe(false);
    });

    it('前者が後者より未来ならfalse', () => {
      const a = new Date('2024-01-01');
      const b = new Date('2023-01-01');
      expect(isBefore(a, b)).toBe(false);
    });
  });

  describe('isAfter', () => {
    it('前者が後者より未来ならtrue', () => {
      const a = new Date('2024-01-01');
      const b = new Date('2023-01-01');
      expect(isAfter(a, b)).toBe(true);
    });

    it('前者が後者と同じ日時ならfalse', () => {
      const a = new Date('2023-01-01T00:00:00Z');
      const b = new Date('2023-01-01T00:00:00Z');
      expect(isAfter(a, b)).toBe(false);
    });

    it('前者が後者より過去ならfalse', () => {
      const a = new Date('2022-12-31');
      const b = new Date('2023-01-01');
      expect(isAfter(a, b)).toBe(false);
    });
  });
});
