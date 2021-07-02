import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';

import Load from '../../components/Load';
import CardCar from '../../components/CardCar';

import api from '../../services/api';

import CarDTO from '../../dtos/CarDTO';

import { Container, Header, CarList, Content, ViewSchedules } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>();

  useEffect(() => {
    api
      .get('/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(() => {
        Alert.alert('Atenção!', 'Ocorreu um erro ao carregar os veículos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
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
        </Content>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardCar data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <ViewSchedules onPress={() => navigation.navigate('SchedulesList')}>
        <Ionicons name="ios-car-sport" size={32} color={colors.shape} />
      </ViewSchedules>
    </Container>
  );
};

export default Home;
