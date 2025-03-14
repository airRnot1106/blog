export type Ok<T> = Readonly<{ ok: true; value: T }>;

export type Err<E = Error> = Readonly<{ ok: false; error: E }>;

export type Result<T, E = Error> = Ok<T> | Err<E>;

export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });

export const err = <E = Error>(error: E): Err<E> => ({ ok: false, error });
