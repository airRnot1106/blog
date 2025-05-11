import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { siteNavigationLinks } from '../../../mocks';
import { SiteNavigationLinkList } from './site-navigation-link-list';

const meta: Meta<typeof SiteNavigationLinkList> = {
  component: SiteNavigationLinkList,
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

type Story = StoryObj<typeof SiteNavigationLinkList>;

export const Anchor: Story = {
  render: () => {
    return (
      <SiteNavigationLinkList links={siteNavigationLinks} variant="anchor" />
    );
  },
};

export const Button: Story = {
  render: () => {
    return (
      <SiteNavigationLinkList links={siteNavigationLinks} variant="button" />
    );
  },
};
