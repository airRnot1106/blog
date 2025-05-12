import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SITE_URL } from '../../../../site/consts';
import { SiteUrlCopyButton } from './site-url-copy-button';

const meta: Meta<typeof SiteUrlCopyButton> = {
  component: SiteUrlCopyButton,
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

type Story = StoryObj<typeof SiteUrlCopyButton>;

export const Default: Story = {
  render: () => {
    return <SiteUrlCopyButton url={`${SITE_URL}/articles/imhere`} />;
  },
};
