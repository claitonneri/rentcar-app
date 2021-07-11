import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import CardCar from '../../components/CardCar';
import Loading from '../../components/Loading';

import CarDTO from '../../dtos/CarDTO';
import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  Wrapper,
  SchedulePeriod,
  SchedulePeriodTitle,
  SchedulePeriodDates,
  SchedulePeriodDateRental,
} from './styles';

interface ScheduleProps {
  id: string;
  car: CarDTO;
  start: string;
  end: string;
  user_id: string;
}

const SchedulesList: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

  useEffect(() => {
    api
      .get('/schedules_byuser?user_id=1')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(() => {
        Alert.alert('Atenção', 'Não foi possível encontrar seus agendamentos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} color={colors.shape} />

        <Title>Seus agendamentos, {'\n'}estão aqui.</Title>

        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>
              Você possui{' '}
              <AppointmentsQuantity>{schedules.length}</AppointmentsQuantity>{' '}
              agendamentos
            </AppointmentsTitle>
          </Appointments>

          <FlatList
            data={schedules}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Wrapper>
                <CardCar data={item.car} />
                <SchedulePeriod>
                  <SchedulePeriodTitle>Período</SchedulePeriodTitle>
                  <SchedulePeriodDates>
                    <SchedulePeriodDateRental>
                      {item.start}
                    </SchedulePeriodDateRental>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={colors.text_detail}
                      style={{ marginHorizontal: 10 }}
                    />
                    <SchedulePeriodDateRental>
                      {item.end}
                    </SchedulePeriodDateRental>
                  </SchedulePeriodDates>
                </SchedulePeriod>
              </Wrapper>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      )}
    </Container>
  );
};

export default SchedulesList;
