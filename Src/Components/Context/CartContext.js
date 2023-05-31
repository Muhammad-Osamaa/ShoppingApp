import React, {createContext, useState} from 'react';

const CartContext = createContext();
const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart,removeItemFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export {CartProvider};
