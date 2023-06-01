import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../Src/Screen/Dashboard';
import Cart from '../Src/Screen/Cart';
import User from '../Src/Screen/User';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: 'Homepage',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({focused, size}) => (
            <FontAwesome5
              name="home"
              color={focused ? '#6C6B6B' : '#6C6B6B'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, size}) => (
            <FontAwesome5
              name="shopping-cart"
              color={focused ? '#6C6B6B' : '#6C6B6B'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Entypo
              name="user"
              color={focused ? '#6C6B6B' : '#6C6B6B'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
