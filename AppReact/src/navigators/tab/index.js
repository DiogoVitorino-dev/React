import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../../pages/home';
import SearchScreen from '../../pages/search';
import PlansScreen from '../../pages/plans';
import LibraryScreen from '../../pages/library';
import Colors from '../../res/colors';
import SpotifyIcon from '../../res/images/SpotifyIcon';

function HomeIcon(tabColor) {
  return <Icon name="home" size={30} color={tabColor} />;
}
function PlansIcon(tabColor) {
  return <SpotifyIcon color={tabColor} size={25} />;
}
function SearchIcon(tabColor) {
  return <Icon name="search" size={30} color={tabColor} />;
}
function LibraryIcon(tabColor) {
  return <Icon name="library-music" size={30} color={tabColor} />;
}

export default function TabNavigator() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.background.solid.primaryLight2Alpha,
        position: 'absolute',
      }}
      initialRouteName="Home"
      labeled
      activeColor={Colors.font.PrimaryLight}
      inactiveColor={Colors.font.PrimaryDark}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => HomeIcon(color),
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => SearchIcon(color),
          tabBarLabel: 'Buscar',
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({color}) => LibraryIcon(color),
          tabBarLabel: 'Sua Biblioteca',
        }}
      />
      <Tab.Screen
        name="Plans"
        component={PlansScreen}
        options={{
          tabBarIcon: ({color}) => PlansIcon(color),
          tabBarLabel: 'Premium',
        }}
      />
    </Tab.Navigator>
  );
}
