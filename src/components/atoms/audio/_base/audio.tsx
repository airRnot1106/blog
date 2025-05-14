import { PrimaryAudio, type PrimaryAudioProps } from './_variant';

type AudioVariant = 'primary';

export type AudioProps<T extends AudioVariant> = T extends 'primary'
  ? PrimaryAudioProps & { variant: T }
  : never;

export const Audio = <T extends AudioVariant>(props: AudioProps<T>) => {
  switch (props.variant) {
    case 'primary': {
      return <PrimaryAudio {...props} />;
    }
    default: {
      return props.variant satisfies never;
    }
  }
};
