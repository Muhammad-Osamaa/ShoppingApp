import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CartContext from '../Components/Context/CartContext';
import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const {cartItems, removeItemFromCart} = useContext(CartContext);
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={{flex: 1}}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <View
              key={`${item?.id}-${index}`}
              style={styles.container}>
              <Image
                source={item.imagePath}
                style={styles.image}/>
              <View style={{flex: 3}}>
                <View style={{flex: 1}}>
                  <Text
                    style={styles.nameText}>
                    {item?.name}
                  </Text>
                </View>
                <View style={styles.priceView}>
                  <Text
                    style={styles.priceText}>
                    {item?.price}
                  </Text>
                  <Text
                    style={styles.currencyText}>
                    {item?.currency}
                  </Text>
                </View>
                <View
                  style={styles.sizeView}>
                  <Text
                    style={styles.sizeText}>
                    {item?.size}
                  </Text>
                  <Text
                    style={styles.totalText}>
                    {item?.total}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => removeItemFromCart(item.id, item.size)}>
                <Text
                  style={styles.xBtnText}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noItemText}>
            No Item Available
          </Text>
        )}
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={`Total Price:     ${totalPrice} NGN`}
            editable={false}
          />
        </View>
        <TouchableOpacity
          style={styles.touchableOpacity2}
          onPress={() => navigation.navigate('Shipping')}>
          <Text style={styles.shippingText}>
            Go to Shipping
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container:{
    
    flexDirection: 'row',
    flex: 8,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
  },
  image:{
    flex: 5,
    marginRight: 10
  },
  nameText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6E7179',
    paddingTop: 15,
    lineHeight: 20,
  },
  priceView:{
    flex: 1, 
    flexDirection: 'row', 
    marginTop: -10
  },
  priceText:{
    color: '#6E7179',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 0,
    textAlign: 'center',
    paddingTop: 0,
  },
  currencyText:{
    color: '#6E7179',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 5,
    paddingTop: 0,
  },
  sizeView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeText:{
    flex: 2,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#989494',
    color: '#FFFFFF',
    borderRadius: 5,
    marginRight: 10,
  },
  totalText:{
    flex: 2,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#989494',
    color: '#FFFFFF',
    borderRadius: 5,
  },
  touchableOpacity:{
    backgroundColor: '#989494',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  xBtnText:{
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  noItemText:{
    fontSize: 18, 
    color: '#000000',
  },
  textInputView:{
    paddingHorizontal: 15,
    marginTop: 10
  },
  textInput:{
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#C4C4C4',
    paddingLeft: 20,
    fontSize: 20,
    height: 58,
    marginLeft: 25,
    width: '90%',
    fontWeight: 'bold',
    color: '#000000',
  },
  touchableOpacity2:{
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#989494',
    width: '85%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 35,
    marginBottom: 30,
  },
  shippingText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F2F2F2',
  },
})