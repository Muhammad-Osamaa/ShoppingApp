// import React, { useContext } from "react";
// import { Context } from "../Components/Context/CartContext";
// import { View,StyleSheet } from "react-native";




// export function CartIcon({navigation}){
//     const {getItemsCount} = useContext(Context);
//     return(
//         <View style= {StyleSheet.container}>
//             <Text style={StyleSheet.text}
//             onPress={()=>{
//                 navigation.navigate('Cart');
//             }}
//             >Cart ({getItemsCount()})</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         marginHorizontal: 8,
//         backgroundColor: '#000',
//         height:40,
//         padding:12,
//         borderRadius:32/2,
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     text:{
//         color:'white',
//         fontWeight:'bold',
//     },
// });