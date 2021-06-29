import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LogoBackground from '../../assets/logo_background_gray.svg';
import Done from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import ConfirmButton from '../../components/ConfirmButton';

const SchedulingComplete: React.FC = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoBackground width={width} />
      <Content>
        <Done width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>

        <Footer>
          <ConfirmButton
            title="OK"
            onPress={() => navigation.navigate('Home')}
          />
        </Footer>
      </Content>
    </Container>
  );
};

export default SchedulingComplete;
