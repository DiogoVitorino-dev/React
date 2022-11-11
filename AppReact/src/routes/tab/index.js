import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/library';
import Player from '../../screens/player';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Logo=()=><Image style={{width:30,height:30}}
  source={require('../../assert/logo.webp')}/>

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTransparent:true,
        headerTitleStyle:{fontWeight:'600'},
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        tabBarStyle:{
          backgroundColor:'#171819',
        },

        tabBarIcon:({focused,color,size})=>{
          let iconName

          if(route.name == 'Home'){
            iconName= focused?'queue-music':'queue-music'

          }else if(route.name == 'Player'){
            iconName = focused ? 'play-arrow' : 'play-arrow';
          }

          return <Icon name={iconName} size={size} color={color} />

        },
        tabBarActiveTintColor:'#00d2ff',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title:'Library',
          headerRight:() => <Icon name='account-circle' size={40} color='#fff'/>,
          headerLeft:() => <Logo/>,
          }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title:'Tocando',
          headerRight:() => <Icon name='more-vert' size={30} color='#fff'/>,
        }}
      />
    </Tab.Navigator>
  );
}