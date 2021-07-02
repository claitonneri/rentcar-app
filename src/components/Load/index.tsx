import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

const Load: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ActivityIndicator color={colors.main} size={60} style={{ flex: 1 }} />
  );
};

export default Load;
