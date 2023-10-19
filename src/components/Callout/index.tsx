import React from 'react';

import Card from '../Card';
import Typography from '../Typography';

import { ButtonsContainer, Container } from './Callout.styled';

interface ICallout {
  title?: string;
  text?: string;
  buttons?: React.ReactNode;
  /**
   * Allows to use styled-components
   */
  className?: string;
}

function Callout({ title, text, buttons, className }: ICallout) {
  return (
    <Card size={title ? 'large' : 'small'} width={title ? '800px' : '100%'} className={className}>
      <Container size={title ? 'large' : 'small'}>
        {title ? <Typography role="h2" fontStyle="bold" content={title} mb="0" mt="0" /> : null}
        {text ? <Typography role={title ? 'h4' : 'h3'} content={text} mb={title ? '14px' : '0'} mt="0" /> : null}
        <ButtonsContainer>{buttons}</ButtonsContainer>
      </Container>
    </Card>
  );
}

export default Callout;
