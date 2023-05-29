import React from 'react';
// import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
//  import {Context} from '../Components/Context/CartContext';
//  const Cart = ({navigation}) => {
//   const {items, getItemsCount, getTotalPrice} = useContext(Context);

//   function Totals() {
//     let [total, setTotal] = useState(0);
//     useEffect(() => {
//       setTotal(getTotalPrice());
//     });
//     return (
//       <View style={styles.cartLineTotal}>
//         <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
//         <Text style={styles.lineRight}>${total}</Text>
//       </View>
//     );
//   }
//   function renderItem({item}) {
//     return (
//       <View style={styles.cartLine}>
//         <Text style={styles.lineLeft}>
//           {item.data.name}x{item.qty}
//         </Text>
//         <Text style={styles.lineRight}>${item.totalPrice}</Text>
//       </View>
//     );
//   }
//   return (
//     <FlatList
//       style={styles.itemsList}
//       contentContainerStyle={styles.itemsListContainer}
//       data={items}
//       renderItem={renderItem}
//       keyExtractor={item => item.data.id.toString()}
//       ListFooterComponent={Totals}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   cartLine: {
//     flexDirection: 'row',
//   },
//   cartLineTotal: {
//     flexDirection: 'row',
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//   },
//   lineTotal: {
//     fontWeight: 'bold',
//   },
//   lineLeft: {
//     fontSize: 20,
//     lineHeight: 40,
//     color: '#333333',
//   },
//   lineRight: {
//     flex: 1,
//     fontSize: 20,
//     lineHeight: 40,
//     color: '#333333',
//     textAlign: 'right',
//   },
//   itemsList: {
//     backgroundColor: '#eeeeee',
//   },
//   itemsListContainer: {
//     backgroundColor: '#eeeeee',
//     paddingVertical: 8,
//     marginHorizontal: 8,
//   },
// });
// export default Cart;

import {View, Text} from 'react-native';
import {CartContext} from '../Components/Context/CartContext';

// export default function Cart() {
//   const {cartItems} = useContext(CartContext);
//   return (
//     <>
//       <View>
//         <CartContext.Consumer>
//           <Text>Cart Items:</Text>
//           {cartItems.map((item, index) => (
//             <Text key={index}>{item.name}</Text>
//           ))}
//         </CartContext.Consumer>
//       </View>
//     </>
//   );
// }
export default function Cart() {
  return (
    <View style={{backgroundColor: 'red', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: '#000000'}}>Cart Screen</Text>
    </View>
  );
}
