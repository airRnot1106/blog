export type ComponentProps = {
  class?: string | undefined;
};

export type FetchRetrun<T, E extends Error> =
  | { data: T; error: undefined }
  | { data: undefined; error: E };
