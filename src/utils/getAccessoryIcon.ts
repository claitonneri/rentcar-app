import React from 'react';
import { SvgProps } from 'react-native-svg';

import AccelerationSvg from '../assets/acceleration.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import ForceSvg from '../assets/force.svg';
import HybridSvg from '../assets/hybrid.svg';
import GasolineSvg from '../assets/gasoline.svg';
import PeopleSvg from '../assets/people.svg';
import SpeedSvg from '../assets/speed.svg';
import CarSvg from '../assets/car.svg';

export const getAccessoryIcon = (type: string): React.FC<SvgProps> => {
  switch (type) {
    case 'acceleration':
      return AccelerationSvg;
    case 'electric':
      return EnergySvg;
    case 'electric_motor':
      return EnergySvg;
    case 'exchange':
      return ExchangeSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'seats':
      return PeopleSvg;
    case 'speed':
      return SpeedSvg;
    default:
      return CarSvg;
  }
};

export default getAccessoryIcon;
