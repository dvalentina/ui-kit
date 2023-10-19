import React from 'react';

import { Container, Input as StyledInput, Label, Message } from './Input.styled';

export interface IInput {
  /**
   * Input value change handler
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * The value of the input
   */
  value?: string;
  /**
   * What is the status of the input validation?
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * The message to display below the input
   */
  message?: string;
  /**
   * The label for the input
   */
  label?: string;
  /**
   * What text to display as a placeholder for the input
   */
  placeholder?: string;
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  /**
   * Allows to use styled-components
   */
  className?: string;
  /**
   * Input type
   */
  type?: 'text' | 'number' | 'password' | 'email';
  /**
   * Input id
   */
  id?: string;
  /**
   * The width of the input
   */
  width?: string;
}

/**
 * An input field where the user can enter data
 */
function Input({ onChange, label, value, status, message, placeholder, disabled, className, type, id, width }: IInput) {
  return (
    <Container className={className} width={width}>
      <Label htmlFor={id}>
        {label}
        <StyledInput
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          $status={status}
          id={id}
        />
      </Label>
      <Message content={message} $status={status} mt="10px" mb="0" role="h4" />
    </Container>
  );
}

export default Input;
