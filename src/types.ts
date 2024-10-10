export type ComponentProps<T = Record<string, unknown>> = {
  class?: string | undefined;
} & T;
