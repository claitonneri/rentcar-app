import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Brand from '../../assets/brand.svg';
import Logo from '../../assets/logo.svg';

import { Container } from './styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -140],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.5, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-100, 70],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startApp = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 3000 }, () => {
      'worklet';

      runOnJS(startApp)();
    });
  }, [splashAnimation, startApp]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <Brand width={RFValue(296)} height={RFValue(200)} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <Logo width={210} height={30} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
