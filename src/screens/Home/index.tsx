import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';

import Loading from '../../components/Loading';
import CardCar from '../../components/CardCar';

import api from '../../services/api';

import CarDTO from '../../dtos/CarDTO';

import { Container, Header, CarList, Content } from './styles';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
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
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardCar data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            buttonAnimatedStyle,
            { position: 'absolute', bottom: 14, right: 22 },
          ]}
        >
          <ButtonAnimated
            onPress={() => navigation.navigate('SchedulesList')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.main,
              elevation: 2,
            }}
          >
            <Ionicons name="ios-car-sport" size={32} color={colors.shape} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
