import styled from 'styled-components';

interface IHr {
  width?: string;
}

export const Hr = styled.hr<IHr>`
  border: none;
  background: ${({ theme }) => theme.divider};
  height: 2px;
  width: ${({ width }) => width || '100%'};
`;
