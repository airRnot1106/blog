import type { Meta, StoryObj } from '@storybook/react';
import { SelfIntroductionSection } from './self-introduction-section';

const meta: Meta<typeof SelfIntroductionSection> = {
  title:
    'Features/SelfIntroduction/Components/Molecules/SelfIntroductionSection',
  component: SelfIntroductionSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SelfIntroductionSection>;

export const Default: Story = {};
