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

import GasolineSvg from '../../assets/gasoline.svg';

interface CardCarProps extends RectButtonProps {
  data: {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    };
    thumbnail: string;
  };
}

const CardCar: React.FC<CardCarProps> = ({ data, ...props }) => {
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
            <GasolineSvg />
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
