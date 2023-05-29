// import React,{createContext,useState} from 'react';
// import { getData } from '../../Screen/data';

// export const Context = createContext();

// export function CartProvider(props){
//     const [items,setItems] = useState([]);

//     function addItemToCart(id){
//         const data = getData(id);
//         setItems((prevItems)=>{
//             const item = prevItems.find((item)=>(item.id == id));
//             if(!item){
//                 return[...prevItems,{
//                     id,
//                     qty:1,
//                     data,
//                     totalPrice: data.price
//                 }];
//             }
//             else{
//                 return prevItems.map((item)=>{
//                     if(item.id == id){
//                         item.qty++;
//                         item.totalPrice += data.price;
//                     }
//                     return item;
//                 });
//             }
//         });
//     }
//     function getItemsCount(){
//         return items.reduce((sum, item) => (sum + item.qty),0);
//     }
//     function getTotalPrice(){
//         return items.reduce((sum, item) => (sum + item.totalPrice),0);
//     }
//     return(
//         <CartProvider
//             value= {{items,setItems,getItemsCount,addItemToCart,getTotalPrice}}>
//             {props.children}
//             </CartProvider>
//     );
// }
import React, {createContext, useState} from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};
