import type { Meta, StoryObj } from '@storybook/react';
import { ZennArticleSection } from './zenn-article-section';

const meta: Meta<typeof ZennArticleSection> = {
  title: 'Features/ZennArticle/Components/Molecules/ZennArticleSection',
  component: ZennArticleSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ZennArticleSection>;

export const Default: Story = {
  args: {
    username: 'example',
  },
};
