import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../styled-system/css';
import { Audio } from './audio';

const meta: Meta<typeof Audio> = {
  component: Audio,
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

type Story = StoryObj<typeof Audio>;

export const Primary: Story = {
  render: () => {
    return (
      <Audio
        src="https://dev.media.airrnot.dev/4029abffbdbdfad8.mp3"
        variant="primary"
      >
        <track
          kind="captions"
          src="https://dev.media.airrnot.dev/4029abffbdbdfad8.vtt"
          srcLang="ja"
        />
      </Audio>
    );
  },
};
