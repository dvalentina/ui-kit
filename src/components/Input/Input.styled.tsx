import styled from 'styled-components';

import Typography, { ITypography } from '../Typography';

interface IContainer {
  width?: string;
}

export const Container = styled.div<IContainer>`
  width: ${({ width }) => width || '399px'};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  font-family: Inter;
`;

interface IMessage extends ITypography {
  $status?: 'error' | 'success' | 'warning';
}

export const Message = styled(Typography)<IMessage>`
  color: ${({ $status, theme }) => {
    switch ($status) {
      case 'error':
        return theme.error;
      case 'success':
        return theme.success;
      case 'warning':
        return theme.warning;
      default:
        return '#FFF';
    }
  }};
`;

interface IInput {
  $status?: 'error' | 'success' | 'warning';
}

export const Input = styled.input<IInput>`
  appearance: none;
  box-sizing: border-box;
  width: auto;
  height: 52px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border: ${({ $status, disabled, theme }) => {
    if (disabled) {
      return `2px solid ${theme.tint}`;
    }

    switch ($status) {
      case 'error':
        return `2px solid ${theme.error}`;
      case 'success':
        return `2px solid ${theme.success}`;
      case 'warning':
        return `2px solid ${theme.warning}`;
      default:
        return `2px solid ${theme.tertiary}`;
    }
  }};
  background: ${({ disabled, theme }) => (disabled ? theme.tint : theme.offwhite)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};

  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active {
    outline: none;
    border: ${({ theme, disabled }) => (disabled ? `2px solid ${theme.tint}` : `2px solid ${theme.accent}`)};
  }

  padding: 12px 20px;
  color: ${({ theme }) => theme.text};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  &::placeholder {
    color: ${({ theme }) => theme.shade};
  }
`;
