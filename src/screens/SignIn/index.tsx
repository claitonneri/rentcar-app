import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Header, Title, Subtitle, Form, Footer } from './styles';

const SignIn: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos {'\n'}quase lá.</Title>
        <Subtitle>
          Faça seu login para começar {'\n'}uma experiência incrível.
        </Subtitle>
      </Header>

      <Form>
        <Input
          icon="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input icon="lock" placeholder="Senha" secureTextEntry />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {
            console.log('');
          }}
          // enabled={false}
          // loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={colors.background_secondary}
          onPress={() => {
            console.log('');
          }}
          // enabled={false}
          // loading={false}
          light
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
