import styled, { css } from 'styled-components';

import { ICard } from '.';

export const Card = styled.div<ICard>`
  border-radius: 16px;
  background: ${({ theme }) => theme.bright};
  position: relative;
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '50px';
      case 'small':
        return '23px 50px 22px 50px';
      default:
        return 'none';
    }
  }};
  ${({ width }) => css`
    width: ${width};
  `}
`;
