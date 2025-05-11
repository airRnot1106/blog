import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../../styled-system/css';
import { siteNavigationLinks } from '../../../../../mocks';
import { ButtonSiteNavigationLinkList } from './button-site-navigation-link-list';

const meta: Meta<typeof ButtonSiteNavigationLinkList> = {
  component: ButtonSiteNavigationLinkList,
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

type Story = StoryObj<typeof ButtonSiteNavigationLinkList>;

export const Default: Story = {
  render: () => {
    return <ButtonSiteNavigationLinkList links={siteNavigationLinks} />;
  },
};
