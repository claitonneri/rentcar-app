import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import ArrowLeft from '../../assets/arrow.svg';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDatesProps,
} from '../../components/Calendar';

import CarDTO from '../../dtos/CarDTO';
import { getAddDay } from '../../utils/getAddDay';

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

interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

interface CarDetailsProps {
  car: CarDTO;
}

const Scheduling: React.FC = () => {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { car } = route.params as CarDetailsProps;
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps,
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps,
  );

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    setRentalPeriod({
      startFormatted: format(
        getAddDay(new Date(start.timestamp)),
        'dd/MM/yyyy',
      ),
      endFormatted: format(getAddDay(new Date(end.timestamp)), 'dd/MM/yyyy'),
    });
  };

  const handleConfirmRental = (): void => {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowLeft />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.endFormatted}
        />
      </Footer>
    </Container>
  );
};

export default Scheduling;
