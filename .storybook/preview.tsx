import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import React from 'react';
import { ich1q, zenkaku } from '../src/app/fonts';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'rosepine-dawn',
        dark: 'rosepine-moon',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    (Story) => (
      <div className={`${zenkaku.variable} ${ich1q.variable} font-zenkaku`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
