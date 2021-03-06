import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...props
}) => {
  return (
    <Container color={color} enabled={enabled} loading={loading} {...props}>
      {loading ? (
        <ActivityIndicator size={28} color="white" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
