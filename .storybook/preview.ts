import React from 'react'
import type { Preview } from "@storybook/react";

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { darkTheme, lightTheme, colors } from '../src/styles/Themes'

const withTheme = (Story, context) => {
  const { theme } = context.parameters;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    React.createElement(ThemeProvider, {
      theme: storyTheme,
      children: [React.createElement(GlobalStyle), React.createElement(Story)]
     })
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'tint',
      values: [
        {
          name: 'tint',
          value: colors.tint,
        },
      ],
    },
  },
  decorators: [withTheme]
};


export default preview;
