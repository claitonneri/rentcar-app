import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Accessory from '../../components/Accessory';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import theme from '../../styles/theme';
import CarDTO from '../../dtos/CarDTO';

import getAccessoryIcon from '../../utils/getAccessoryIcon';

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer,
} from './styles';

interface CarDetailsProps {
  car: CarDTO;
}

const CarDetails: React.FC = () => {
  const route = useRoute();
  const { colors } = useTheme();
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();
  const { car } = route.params as CarDetailsProps;

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP,
      ),
    };
  });

  const sliderCarsStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  const scrollYHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', { car });
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View
        style={[
          headerStyle,
          {
            position: 'absolute',
            overflow: 'hidden',
            zIndex: 1,
            backgroundColor: colors.background_secondary,
          },
        ]}
      >
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header>

        <Animated.View style={sliderCarsStyle}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: 'center',
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollYHandler}
        scrollEventThrottle={16}
      >
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

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          color={theme.colors.main}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
