import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SiteBreadcrumb, type SiteBreadcrumbProps } from './site-breadcrumb';

const meta: Meta<typeof SiteBreadcrumb> = {
  title: 'Features/Site/Components/Atoms/SiteBreadcrumb',
  component: SiteBreadcrumb,
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

type Story = StoryObj<typeof SiteBreadcrumb>;

const items = [
  {
    label: 'TOP',
    href: '/',
  },
  {
    label: '記事一覧',
    href: '/articles',
  },
] as const satisfies SiteBreadcrumbProps['items'];

export const Default: Story = {
  render: () => {
    return <SiteBreadcrumb items={items} />;
  },
};
