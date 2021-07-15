import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Container,
  InputText,
  IconContainer,
  IconContainerPassword,
} from './styles';

interface IInputProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>['name'];
}

const Input: React.FC<IInputProps> = ({
  icon,
  secureTextEntry = false,
  ...props
}) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <IconContainer>
        <Feather name={icon} size={24} color={colors.text_detail} />
      </IconContainer>

      <InputText secureTextEntry={visible} {...props} />

      {secureTextEntry && (
        <IconContainerPassword>
          <BorderlessButton onPress={() => setVisible(!visible)}>
            <Feather
              name={visible ? 'eye' : 'eye-off'}
              size={24}
              color={colors.text_detail}
            />
          </BorderlessButton>
        </IconContainerPassword>
      )}
    </Container>
  );
};

export default Input;
