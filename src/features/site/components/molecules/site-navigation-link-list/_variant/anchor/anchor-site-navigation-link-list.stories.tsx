import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../../styled-system/css';
import { siteNavigationLinks } from '../../../../../mocks';
import { AnchorSiteNavigationLinkList } from './anchor-site-navigation-link-list';

const meta: Meta<typeof AnchorSiteNavigationLinkList> = {
  component: AnchorSiteNavigationLinkList,
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

type Story = StoryObj<typeof AnchorSiteNavigationLinkList>;

export const Default: Story = {
  render: () => {
    return <AnchorSiteNavigationLinkList links={siteNavigationLinks} />;
  },
};
