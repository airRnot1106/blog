import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SiteBreadcrumbLayout } from './site-breadcrumb-layout';

const meta: Meta<typeof SiteBreadcrumbLayout> = {
  component: SiteBreadcrumbLayout,
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

type Story = StoryObj<typeof SiteBreadcrumbLayout>;

export const Default: Story = {
  render: () => {
    return (
      <SiteBreadcrumbLayout
        items={[
          {
            label: 'TOP',
            href: '/',
          },
          {
            label: '記事一覧',
            href: '/articles',
          },
        ]}
      >
        <div>Contents</div>
      </SiteBreadcrumbLayout>
    );
  },
};

const Component = (
  <SiteBreadcrumbLayout
    items={[
      {
        label: 'TOP',
        href: '/',
      },
      {
        label: '記事一覧',
        href: '/articles',
      },
    ]}
  >
    <div>Contents</div>
  </SiteBreadcrumbLayout>
);

export const XSmall: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: () => {
    return Component;
  },
};

export const Small: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
  render: () => {
    return Component;
  },
};

export const Medium: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
  render: () => {
    return Component;
  },
};

export const Large: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
  },
  render: () => {
    return Component;
  },
};

export const XLarge: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl',
    },
  },
  render: () => {
    return Component;
  },
};
