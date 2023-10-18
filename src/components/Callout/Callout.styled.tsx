import styled from 'styled-components';

interface IContainer {
  size: 'large' | 'small';
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${({ size }) => (size === 'large' ? 'column' : 'row')};
  gap: ${({ size }) => (size === 'large' ? '20px' : '56px')};
  align-items: ${({ size }) => (size === 'large' ? 'start' : 'center')};
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
