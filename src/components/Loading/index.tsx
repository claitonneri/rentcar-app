import React from 'react';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/loading.json';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ width: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
};

export default Loading;
