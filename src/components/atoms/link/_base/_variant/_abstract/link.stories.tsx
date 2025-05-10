import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../../../../../styled-system/css';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  component: Link,
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

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => {
    return <Link href="#">Link</Link>;
  },
};
