import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { BlogArticlePodcastAudio } from './blog-article-podcast-audio';

const meta: Meta<typeof BlogArticlePodcastAudio> = {
  component: BlogArticlePodcastAudio,
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

type Story = StoryObj<typeof BlogArticlePodcastAudio>;

export const Default: Story = {
  render: () => {
    return <BlogArticlePodcastAudio slug="4029abffbdbdfad8" />;
  },
};
