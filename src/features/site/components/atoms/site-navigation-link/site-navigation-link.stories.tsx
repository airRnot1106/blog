import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { siteNavigationLinks } from '../../../mocks';
import { SiteNavigationLink } from './site-navigation-link';

const meta: Meta<typeof SiteNavigationLink> = {
  component: SiteNavigationLink,
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

type Story = StoryObj<typeof SiteNavigationLink>;

export const Default: Story = {
  render: () => {
    return <SiteNavigationLink link={siteNavigationLinks[0]} />;
  },
};
