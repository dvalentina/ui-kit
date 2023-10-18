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
}

function Card({ size, width, children }: ICard) {
  return (
    <StyledCard size={size} width={width}>
      {children}
    </StyledCard>
  );
}

export default Card;
