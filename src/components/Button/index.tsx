import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ title, color, ...props }) => {
  return (
    <Container color={color} {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
