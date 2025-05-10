import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { headings } from '../../../mocks';
import { BlogArticleTocNavigationSectionPresentational } from './blog-article-toc-navigation-section.presentational';

const meta: Meta<typeof BlogArticleTocNavigationSectionPresentational> = {
  title:
    'Features/BlogArticleToc/Components/Molecules/BlogArticleTocNavigationSection',
  component: BlogArticleTocNavigationSectionPresentational,
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

type Story = StoryObj<typeof BlogArticleTocNavigationSectionPresentational>;

export const Default: Story = {
  render: () => {
    return (
      <BlogArticleTocNavigationSectionPresentational headings={headings} />
    );
  },
};
