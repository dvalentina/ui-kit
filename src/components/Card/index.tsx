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
}

function Card({ size, children }: ICard) {
  return <StyledCard size={size}>{children}</StyledCard>;
}

export default Card;
