import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ title, color, ...rest }) => {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
