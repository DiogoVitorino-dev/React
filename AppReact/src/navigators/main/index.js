import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../../pages/screens/FirstScreen';
import HomeScreen from '../../pages/home';
import SecondScreen from '../../pages/screens/SecondScreen';
import TasksScreen from '../../pages/tasks';

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TasksScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
          name="TasksScreen"
          component={TasksScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
