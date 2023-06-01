import React, {createContext, useState} from 'react';

const CartContext = createContext();
const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId, itemsize) => {
    const updatedCartItems = cartItems.filter(
      item => item.Id !== itemId && item.size !== itemsize,
    );
    setCartItems(updatedCartItems);

    // const removeItemFromCart = (item,index) => {

    //   const updatedCartItems = cartItems.filter(item=> index!==index );
    //   setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeItemFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export {CartProvider};
