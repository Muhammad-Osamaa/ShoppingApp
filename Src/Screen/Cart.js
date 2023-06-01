import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView style={{flex: 1}}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <View
              key={`${item?.id}-${index}`}
              style={{
                flexDirection: 'row',
                flex: 8,
                padding: 15,
                backgroundColor: '#FFFFFF',
                borderBottomWidth: 1,
                borderColor: '#C4C4C4',
              }}>
              <Image
                source={item.imagePath}
                style={{flex: 5, marginRight: 10}}
              />
              <View style={{flex: 3}}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#6E7179',
                      paddingTop: 15,
                      lineHeight: 20,
                    }}>
                    {item?.name}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: -10}}>
                  <Text
                    style={{
                      color: '#6E7179',
                      fontWeight: 'bold',
                      fontSize: 16,
                      paddingBottom: 0,
                      textAlign: 'center',
                      paddingTop: 0,
                    }}>
                    {item?.price}
                  </Text>
                  <Text
                    style={{
                      color: '#6E7179',
                      fontWeight: 'bold',
                      fontSize: 16,
                      textAlign: 'center',
                      paddingLeft: 5,
                      paddingTop: 0,
                    }}>
                    {item?.currency}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      flex: 2,
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      backgroundColor: '#989494',
                      color: '#FFFFFF',
                      borderRadius: 5,
                      marginRight: 10,
                    }}>
                    {item?.size}
                  </Text>
                  <Text
                    style={{
                      flex: 2,
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      backgroundColor: '#989494',
                      color: '#FFFFFF',
                      borderRadius: 5,
                    }}>
                    {item?.total}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#989494',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                }}
                onPress={() => removeItemFromCart(item.id, item.size)}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}>
                  x
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={{fontSize: 18, color: '#000000'}}>
            No Item Available
          </Text>
        )}
        <View style={{paddingHorizontal: 15, marginTop: 10}}>
          <TextInput
            style={{
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
            }}
            value={`Total Price:     ${totalPrice} NGN`}
            editable={false}
          />
        </View>
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => navigation.navigate('Shipping')}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#F2F2F2'}}>
            Go to Shipping
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
