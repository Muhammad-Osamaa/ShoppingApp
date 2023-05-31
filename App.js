import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from './Navigations/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
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
