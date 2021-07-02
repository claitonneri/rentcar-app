import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import CarDTO from '../../dtos/CarDTO';
import getAccessoryIcon from '../../utils/getAccessoryIcon';

interface CardCarProps extends RectButtonProps {
  data: CarDTO;
}

const CardCar: React.FC<CardCarProps> = ({ data, ...props }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...props}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default CardCar;
