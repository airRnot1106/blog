import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SiteUtilityList } from './site-utility-list';

const meta: Meta<typeof SiteUtilityList> = {
  component: SiteUtilityList,
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

type Story = StoryObj<typeof SiteUtilityList>;

export const Default: Story = {
  render: () => {
    return <SiteUtilityList />;
  },
};
