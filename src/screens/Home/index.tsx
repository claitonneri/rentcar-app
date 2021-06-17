import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Container, Header, Content, Total } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Content>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <Total>Total de 12 carros</Total>
        </Content>
      </Header>
    </Container>
  );
};

export default Home;
