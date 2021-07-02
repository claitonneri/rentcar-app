import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { format } from 'date-fns';

import { useTheme } from 'styled-components';

import { getAddDay } from '../../utils/getAddDay';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import Accessory from '../../components/Accessory';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import CarDTO from '../../dtos/CarDTO';

import api from '../../services/api';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceAmount,
  RentalPriceTotal,
  Footer,
} from './styles';

interface SchedulingDetailsProps {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriodProps {
  start: string;
  end: string;
}

const SchedulingDetails: React.FC = () => {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const { car, dates } = route.params as SchedulingDetailsProps;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps,
  );
  const rentTotal = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
  }).format(Number(car.rent.price * dates.length));

  useEffect(() => {
    setRentalPeriod({
      start: format(getAddDay(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getAddDay(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  }, [dates]);

  const handleSchedulesConfirm = async () => {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      start: format(getAddDay(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getAddDay(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });

    await api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Atenção',
          'Não foi possível realizar a confirmação do agendamento.',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(16)}
            color={theme.colors.text_detail}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceAmount>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceAmount>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          onPress={handleSchedulesConfirm}
          color={theme.colors.success}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
