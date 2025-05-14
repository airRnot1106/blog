import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { PrimaryAudio } from './primary-audio';

const meta: Meta<typeof PrimaryAudio> = {
  component: PrimaryAudio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          padding: '1rem',
        })}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PrimaryAudio>;

export const Default: Story = {
  render: () => {
    return (
      <PrimaryAudio src="https://dev.media.airrnot.dev/4029abffbdbdfad8.mp3">
        <track
          kind="captions"
          src="https://dev.media.airrnot.dev/4029abffbdbdfad8.vtt"
          srcLang="ja"
        />
      </PrimaryAudio>
    );
  },
};
