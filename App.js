import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from './Navigations/StackNavigation';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Shipping from './Src/Screen/Shipping';
import Cart from './Src/Screen/Cart';
import {CartProvider} from './Src/Components/Context/CartContext';

export default function App() {
  return (
    <>
      <CartProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </CartProvider>
    </>
  );
}
