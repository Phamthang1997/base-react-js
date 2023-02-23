/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css
} from 'styled-components'
import colors from './colors'
import { fontSize, fontWeight } from './fonts'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    (accumulator)[size] = (a, b, c) => css`
      @media (max-width: ${(MEDIA_WIDTHS)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
)
const input = {
  input_small: '380px',
  input_medium: '512px',
  input_large: '810px'
}

const theme = () => ({
  ...colors,
  ...fontSize,
  ...fontWeight,
  grids: {
    sx: 8,
    sm: 16,
    md: 24,
    lg: 32
  },
  // font size for text
  size_16: '16px',
  size_17: '17px',
  size_18: '18px',
  size_14: '14px',
  size_13: '13px',
  size_12: '12px',

  ...input,
  // media queries
  mediaWidth: mediaWidthTemplates
})

export default function ThemeProvider({ children }) {
  return <StyledComponentsThemeProvider theme={theme()}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Poppins', system-ui, -apple-system, 
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", 
  "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", 
  "Segoe UI Symbol", "Noto Color Emoji";
  background-color: ${({ theme }) => theme.white};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
  #root {
    width: 100%;
    height: 100%;
  }
  
  // remove unnecessary whitespace in formTimePicker
  .ant-picker-time-panel-column {
    &:after {
      content: none;
    }
  }
}

// antd custom
.ant-dropdown-menu {
    border-radius: 1rem;
    .ant-dropdown-menu-item {
      border-radius: 1rem;
      padding: 0.5rem;
      margin: .25rem .5rem;
      color: #808191;
      &:not(.ant-dropdown-menu-item-disabled) {
        &:hover {
          background-color: #f0effb;
          color: #6c5dd3;
          .logout-icon {
            fill: #6c5dd3;
          }
        }
      }
      .ant-dropdown-menu-title-content {
        display: flex;
        align-items: center;
      }
    }
    .ant-dropdown-menu-item-divider {
      width: 90%;
      margin: 0 auto;
    }
}
.ant-btn {
  border-radius: .75rem;
  &.ant-btn-primary {
    background-color: #4d69fa;
    border-color: #4d69fa;
  }

  &.ant-btn-primary[disabled] {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
}

.ant-input {
  color: ${({ theme }) => theme.text_primary};
  font-size: .8rem;
  font-weight: 600;
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
  border-radius: 1rem !important;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus, &:hover {
    color: #323232;
    background-color: #f8f9fa;
    border-color: #b6aee9;
    outline: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(108 93 211 / 25%);
  }
}

.input-number {
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
  border-radius: 1rem !important;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus, &:hover {
    color: #323232;
    background-color: #f8f9fa;
    border-color: #b6aee9;
    outline: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(108 93 211 / 25%);
  }

  & .prefix {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  & .ant-input-number {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    & .ant-input-number-input {
      color: ${({ theme }) => theme.text_primary};
      font-size: .8rem;
      font-weight: 600;
    }
    & .ant-input-number-handler-wrap {
      background-color: transparent;
    }
  }
}


.ant-select {
  color: ${({ theme }) => theme.text_primary};
  font-size: .8rem;
  font-weight: 600;
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
  border-radius: 1rem !important;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus, &:hover {
    color: #323232;
    background-color: #f8f9fa;
    border-color: #b6aee9;
    outline: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(108 93 211 / 25%);
  }

  & .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
}

.ant-message {
  z-index: 1200;
}
.ant-tree {
  border-radius: .75rem;
}

.ant-popover {
  .ant-popover-inner {
    border-radius: .75rem;
  }
}
`
