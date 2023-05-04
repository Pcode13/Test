import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from '../Screens/Main';
import MoreInfo from '../Screens/MoreInfo';
import SlpashScreen from '../Screens/SlpashScreen';

const Stack = createStackNavigator();

const AllNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SlpashScreen" component={SlpashScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigation;
