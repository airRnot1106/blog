import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from '../../../../../../../styled-system/css';

export type PrimaryAudioProps = Omit<ComponentProps<'audio'>, 'controls'> & {
  children: ReactNode;
};

export const PrimaryAudio: FC<PrimaryAudioProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <audio
      className={cx(
        className,
        css({
          '&::-webkit-media-controls-panel': {
            backgroundColor: 'surface',
          },
        }),
      )}
      controls
      {...rest}
    >
      {children}
      お使いのブラウザはaudioをサポートしていません。
    </audio>
  );
};
