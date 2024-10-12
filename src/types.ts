export type ComponentProps = {
  class?: string | undefined;
};

export type FetchReturn<T, E extends Error> =
  | { data: T; error: undefined }
  | { data: undefined; error: E };
