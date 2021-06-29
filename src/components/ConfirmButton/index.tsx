import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ title, ...props }) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ConfirmButton;
