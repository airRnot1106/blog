import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { Heading } from '../../../../../components/atoms/heading';
import { BlogArticlePodcastAudio } from '../../atoms/blog-article-podcast-audio';
import { BlogArticlePodcastSection } from './blog-article-podcast-section';

const meta: Meta<typeof BlogArticlePodcastSection> = {
  component: BlogArticlePodcastSection,
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

type Story = StoryObj<typeof BlogArticlePodcastSection>;

export const Default: Story = {
  render: () => {
    return (
      <BlogArticlePodcastSection
        audio={<BlogArticlePodcastAudio slug="4029abffbdbdfad8" />}
        heading={
          <Heading
            as="h2"
            size="clamp"
            subtitle="ぽっどきゃすと"
            title="Podcast"
          />
        }
      />
    );
  },
};
