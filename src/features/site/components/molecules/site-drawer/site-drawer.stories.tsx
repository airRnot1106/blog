import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SiteDrawer } from './site-drawer';

const meta: Meta<typeof SiteDrawer> = {
  component: SiteDrawer,
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

type Story = StoryObj<typeof SiteDrawer>;

export const Default: Story = {
  render: () => {
    return <SiteDrawer open={true} />;
  },
};
