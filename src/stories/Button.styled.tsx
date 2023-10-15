import styled from 'styled-components';

import { IButton } from './Button';

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
  background-color: ${({ primary, disabled }) => {
    if (disabled) {
      return '#EBF4F8';
    }

    if (primary) {
      return '#2b78e4';
    }

    return '#FFF';
  }};
  border: ${({ primary, bordered, disabled, error }) => {
    if (disabled) {
      return '1px solid #EBF4F8';
    }

    if (primary) {
      return '1px solid #2b78e4';
    }

    if (error) {
      return '1px solid #FF7171';
    }

    if (bordered) {
      return '1px solid #2b78e4';
    }

    if (bordered) {
      return '1px solid #fff';
    }

    return '1px solid transparent';
  }};
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ primary, disabled, error }) => {
    if (disabled) {
      return '#B2B8BE';
    }

    if (primary) {
      return '#fff';
    }

    if (error) {
      return '#FF7171';
    }

    return '#2b78e4';
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
