import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../../pages/FirstScreen';
import ThirdScreen from '../../pages/ThirdScreen';
import FourthScreen from '../../pages/FourthScreen';
import FifthScreen from '../../pages/FifthScreen';
import SecondScreen from '../../pages/SecondScreen';
import SixScreen from '../../pages/SixScreen';
import SevenScreen from '../../pages/SevenScreen';
import Test from '../../pages/test';

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="FourthScreen"
          component={FourthScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="FifthScreen"
          component={FifthScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SixScreen"
          component={SixScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SevenScreen"
          component={SevenScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
