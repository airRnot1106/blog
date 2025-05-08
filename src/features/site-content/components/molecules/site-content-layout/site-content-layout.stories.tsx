import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { SiteContentLayout } from './site-content-layout';

const meta: Meta<typeof SiteContentLayout> = {
  title: '',
  component: SiteContentLayout,
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

type Story = StoryObj<typeof SiteContentLayout>;

const Main = () => {
  return <div>Contents</div>;
};

export const Default: Story = {
  render: () => {
    return (
      <SiteContentLayout>
        <Main />
      </SiteContentLayout>
    );
  },
};

const Component = (
  <SiteContentLayout>
    <Main />
  </SiteContentLayout>
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
