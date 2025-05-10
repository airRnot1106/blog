import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../styled-system/css';
import { FetchResultMessage } from '../../../../fetch-result/components/molecules/fetch-result-message';
import { LaprasImagePresentational } from '../../atoms/lapras-image/lapras-image.presentational';
import { LaprasSection } from './lapras-section';

const meta: Meta<typeof LaprasSection> = {
  component: LaprasSection,
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

type Story = StoryObj<typeof LaprasSection>;

export const Default: Story = {
  render: () => {
    return (
      <LaprasSection>
        <LaprasImagePresentational src="https://media.lapras.com/media/public_setting/RMNHLTF/eecd161ed5ab498381a9c14b2f729ee7.png" />
      </LaprasSection>
    );
  },
};

export const Failed: Story = {
  render: () => {
    return (
      <LaprasSection>
        <FetchResultMessage variant="error" />
      </LaprasSection>
    );
  },
};

const Component = (
  <LaprasSection>
    <LaprasImagePresentational src="https://media.lapras.com/media/public_setting/RMNHLTF/eecd161ed5ab498381a9c14b2f729ee7.png" />
  </LaprasSection>
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
