import React, {useContext} from 'react';
// import { Text,Image, Button, FlatList, StyleSheet} from 'react-native';

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

import {View, Text,Image, SafeAreaView,ScrollView} from 'react-native';
import CartContext from '../Components/Context/CartContext';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
  const {cartItems} = useContext(CartContext);
  
  return (

    <SafeAreaView style={{flex:1,backgroundColor:'#FFFFFF'}}>
      <ScrollView style={{flex:1}}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <>
              <View key={item?.id} style={{flexDirection:'row',flex:8,padding:15,backgroundColor:'#FFFFFF',borderBottomWidth:1,borderColor:'#C4C4C4'}}>
                <Image source= {item.imagePath} style={{flex:5,margin:5}}/>
                <View style={{flex:3,marginLeft:15,}}>
                  <View style={{flex:1,marginBottom:-10}}>
                <Text style={{fontSize: 16,fontWeight:'bold', color: '#6E7179',alignItems:'center',paddingTop:15,lineHeight:20}}>
                  {item?.name}
                </Text>
                </View>  
                <View style={{flex:1,flexDirection:'row',marginTop:-10}}>
                  <Text style={{color: '#6E7179',fontWeight:'bold',fontSize: 16,paddingBottom:0,textAlign:'center',paddingTop:0}}>{item?.price}</Text>
                  <Text style={{color: '#6E7179',fontWeight:'bold',fontSize: 16,textAlign:'center',paddingLeft:5,paddingTop:0}}>{item?.currency}</Text>
                  </View>  
                  <View style={{flex:4,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{flex:2,fontSize:20,fontWeight:'bold',textAlign:'center',backgroundColor:'#989494',color:'#FFFFFF',borderRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopRightRadius:5,borderTopLeftRadius:5}}>{item?.size}</Text>
                    <Text style={{flex:2,fontSize:20,fontWeight:'bold',textAlign:'center',backgroundColor:'#989494',color:'#FFFFFF',borderRadius:5,marginLeft:30,borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopRightRadius:5,borderTopLeftRadius:5}}>{item?.total}</Text>
                  </View>
                  </View>
              </View> 
           </>
              
          ))
        ) : (
          <Text style={{fontSize: 18, color: '#000000'}}>
            No Item Available
          </Text>
        )}
        <View style={{flex:1,backgroundColor:'#F4F4F4'}}><Text></Text></View>
    
        </ScrollView>
    </SafeAreaView>
 
  );
}
