import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SocialShareLinkButtonList } from './social-share-link-button-list';

const meta: Meta<typeof SocialShareLinkButtonList> = {
  component: SocialShareLinkButtonList,
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

type Story = StoryObj<typeof SocialShareLinkButtonList>;

export const Horizontal: Story = {
  render: () => {
    return (
      <SocialShareLinkButtonList
        direction="horizontal"
        text="サイトをリニューアルしました | airRnot.dev"
        url="https://airrnot.dev/articles/imhere"
      />
    );
  },
};

export const Vertical: Story = {
  render: () => {
    return (
      <SocialShareLinkButtonList
        direction="vertical"
        text="サイトをリニューアルしました | airRnot.dev"
        url="https://airrnot.dev/articles/imhere"
      />
    );
  },
};
