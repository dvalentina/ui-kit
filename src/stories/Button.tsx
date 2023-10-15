import React from 'react';

import { Button as StyledButton } from './Button.styled';

export interface IButton {
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Should the button have a border?
   */
  bordered?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is this button disabled?
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'large' | 'small';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Does button have an error state?
   */
  error?: boolean;
}

/**
 * Primary UI component for user interaction
 */
function Button({ onClick, bordered, primary, disabled, size, label, error }: IButton) {
  return (
    <StyledButton onClick={onClick} bordered={bordered} primary={primary} disabled={disabled} size={size} error={error}>
      {label}
    </StyledButton>
  );
}

export default Button;
