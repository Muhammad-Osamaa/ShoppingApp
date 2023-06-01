import React from 'react';
import Login from '../Src/Screen/Login';
import Register from '../Src/Screen/Register';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import Homepage from '../Src/Screen/Dashboard';
import CardView from '../Src/Screen/CardView';
import Cart from '../Src/Screen/Cart';
import Shipping from '../Src/Screen/Shipping';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Resgister'>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Dashboard" component={Homepage} />
      <Stack.Screen name="Carts" component={Cart} />
      <Stack.Screen name="Shipping" component={Shipping} />
      <Stack.Screen
        name="CardView"
        component={CardView}
        initialParams={{item: {}}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
