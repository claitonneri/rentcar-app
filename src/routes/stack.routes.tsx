import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Splash from '../screens/Splash';
import CarDetails from '../screens/CarDetails';
import Scheduling from '../screens/Scheduling';
import SchedulesList from '../screens/SchedulesList';
import SchedulingDetails from '../screens/SchedulingDetails';
import SchedulingComplete from '../screens/SchedulingComplete';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulesList" component={SchedulesList} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
};

export default StackRoutes;
