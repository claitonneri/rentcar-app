import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import BackButton from '../../components/BackButton';

import ArrowLeft from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false} />
          </DateInfo>

          <ArrowLeft />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate('SchedulingDetails')}
        />
      </Footer>
    </Container>
  );
};

export default Scheduling;
