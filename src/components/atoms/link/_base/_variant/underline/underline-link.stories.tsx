import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { UnderlineLink } from './underline-link';

const meta: Meta<typeof UnderlineLink> = {
  title: 'Components/Atoms/Link/_Base/_Variant/Underline/UnderlineLink',
  component: UnderlineLink,
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

type Story = StoryObj<typeof UnderlineLink>;

export const Default: Story = {
  render: () => {
    return <UnderlineLink href="#">Underline Link</UnderlineLink>;
  },
};
