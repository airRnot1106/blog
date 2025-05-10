import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { LaprasImagePresentational } from './lapras-image.presentational';

const meta: Meta<typeof LaprasImagePresentational> = {
  component: LaprasImagePresentational,
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

type Story = StoryObj<typeof LaprasImagePresentational>;

export const Default: Story = {
  render: () => {
    return (
      <LaprasImagePresentational src="https://media.lapras.com/media/public_setting/RMNHLTF/eecd161ed5ab498381a9c14b2f729ee7.png" />
    );
  },
};
