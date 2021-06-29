import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import CardCar from '../../components/CardCar';

import { Container, Header, CarList, Content, Total } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const data = {
    brand: 'Audi',
    name: 'RS5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  };

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

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <CardCar
            data={data}
            onPress={() => navigation.navigate('CarDetails')}
          />
        )}
      />
    </Container>
  );
};

export default Home;
