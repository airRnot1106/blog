---
name: 'storybook'
description: 'Generate story file'
root: 'src'
output: '**/*'
ignore: []
questions:
  component:
    message: 'Please Enter component name.'
  extras:
    message: 'Please select a extra story.'
    multiple: true
    choices:
        - 'size'
        - 'responsive'
---

# `{{ inputs.component | kebab }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.component | pascal }} } from './{{ inputs.component | kebab }}';

const meta: Meta<typeof {{ inputs.component | pascal }}> = {
  title: '',
  component: {{ inputs.component | pascal }},
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

type Story = StoryObj<typeof {{ inputs.component | pascal }}>;

export const Default: Story = {
  render: () => {
    return (
        <{{ inputs.component | pascal }} />
    );
  },
};

{{ if contains(inputs.extras, 'size') }}
export const Size: Story = {
  render: () => {
    return (
      <ul
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        })}
      >
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(
          (size) => (
            <li key={size}>
              <{{ inputs.component | pascal }} size={size} />
            </li>
          ),
        )}
      </ul>
    );
  },
};
{{ end }}

{{ if contains(inputs.extras, 'responsive') }}
const Component = ();

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
{{ end }}
```
