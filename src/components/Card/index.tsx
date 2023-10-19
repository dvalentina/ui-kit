import React from 'react';

import { Card as StyledCard } from './Card.styled';

export interface ICard {
  /**
   * Affects the paddings in the card
   */
  size?: 'large' | 'small';
  /**
   * What elements should be inside the card?
   */
  children?: React.ReactNode;
  /**
   * The width of the card
   */
  width?: string;
  /**
   * Allows to use styled-components
   */
  className?: string;
}

function Card({ size, width, children, className }: ICard) {
  return (
    <StyledCard size={size} width={width} className={className}>
      {children}
    </StyledCard>
  );
}

export default Card;
