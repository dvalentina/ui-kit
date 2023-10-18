import styled from 'styled-components';

import { IButton } from '.';

export const Button = styled.button<IButton>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '21px 101px 21px 106px';
      case 'small':
        return '15px 68px';
      default:
        return '15px 68px';
    }
  }};
  background-color: ${({ primary, disabled, theme }) => {
    if (disabled) {
      return theme.tint;
    }

    if (primary) {
      return theme.accent;
    }

    return theme.bright;
  }};
  border: ${({ primary, bordered, disabled, error, theme }) => {
    if (disabled) {
      return `1px solid ${theme.tint}`;
    }

    if (primary) {
      return `1px solid ${theme.accent}`;
    }

    if (error) {
      return `1px solid ${theme.error}`;
    }

    if (bordered) {
      return `1px solid ${theme.accent}`;
    }

    return `1px solid ${theme.bright}`;
  }};
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ primary, disabled, error, theme }) => {
    if (disabled) {
      return theme.shade;
    }

    if (primary) {
      return theme.bright;
    }

    if (error) {
      return theme.error;
    }

    return theme.accent;
  }};
  text-align: center;
  font-family: Inter;
  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return '28px';
      case 'small':
        return '20px';
      default:
        return '20px';
    }
  }};
  font-style: normal;
  font-weight: ${({ size }) => {
    switch (size) {
      case 'large':
        return '700';
      case 'small':
        return '500';
      default:
        return '500';
    }
  }};
  line-height: ${({ size }) => {
    switch (size) {
      case 'large':
        return '36px';
      case 'small':
        return '28px';
      default:
        return '28px';
    }
  }};
`;
