import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ToastAndroid,
} from 'react-native';
import CartContext from '../Components/Context/CartContext';

const animationTime = 500;

export default function CardView({route, navigation}) {
  const item = route.params.item;
  const {cartItems, addToCart} = useContext(CartContext);
  let [counter, setCounter] = useState(1);
  const totalPrice = item.price * counter;
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = value => {
    return Animated.spring(animatedValue, {
      toValue: value,
      useNativeDriver: true,
      damping: 15,
    });
  };
  const increment = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    startAnimation(1).start();
    setTimeout(() => {
      startAnimation(0).start();
    }, animationTime);
  };
  const decrement = () => {
    const newValue = counter - 1;
    if (counter > 1) {
      setCounter(newValue);
      startAnimation(0).start();
      setTimeout(() => {}, animationTime);
    }
  };
  const scale = animatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0.5, 1, 1.2],
    extrapolate: 'clamp',
  });
  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeSelection = size => {
    setSelectedSize(size);
  };
  // const handleAddToCart=()=>{=============== correct code =====================
  //     if(!selectedSize){
  //       ToastAndroid.show('Please Select a size', ToastAndroid.SHORT);
  //     }else{
  //       addToCart({...item,total:counter, price: totalPrice,size:selectedSize});
  //       // navigation.goBack();
  //       navigation.navigate('Cart');
  //       }
  //     };
  //===============================================================================================
  // const handleAddToCart = () => {
  //   if (!selectedSize) {
  //     ToastAndroid.show('Please Select a size', ToastAndroid.SHORT);
  //   } else {
  //     const cartItem = {
  //       ...item,
  //       total: counter,
  //       price: totalPrice,
  //       size: selectedSize,
  //     };
  //     const isSizeAlreadyAdded = cartItems.some(item => item.size === selectedSize);
  //     if (isSizeAlreadyAdded) {
  //       ToastAndroid.show(
  //         'This size is already in the Cart',
  //         ToastAndroid.SHORT,
  //       );
  //     } else {
  //       addToCart(cartItem);
  //       navigation.navigate('Cart');
  //     }
  //   }
  // };
  const handleAddToCart = () => {
    if (!selectedSize) {
      ToastAndroid.show('Please Select a size', ToastAndroid.SHORT);
    } else {
      const isItemAlreadyInCart = cartItems.some(
        cartItem => cartItem.id === item.id && cartItem.size === selectedSize,
      );

      if (isItemAlreadyInCart) {
        ToastAndroid.show(
          'This item is already in the cart',
          ToastAndroid.SHORT,
        );
      } else {
        const cartItem = {
          ...item,
          total: counter,
          price: totalPrice,
          size: selectedSize,
        };
        addToCart(cartItem);
        navigation.navigate('Cart');
      }
    }
  };

  return (
    <>
      <Image source={item.imagePath} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={{flex: 9, justifyContent: 'center'}}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.txxt}>
              Complete set of Agba, Buba, Trousers and Cap for Men. Suitable for
              Owambe Events. It can be worn without the Agbada.
            </Text>
          </View>
          <View style={styles.BtnView}>
            <Btn title={'+'} onPress={increment} />
            <Animated.Text
              style={[styles.AnimatedText, {transform: [{scale}]}]}>
              {counter}
            </Animated.Text>
            <Btn title={'-'} onPress={decrement} />
          </View>
        </View>
        <View style={styles.SBtnView}>
          <SBtn
            title={'M'}
            size={selectedSize}
            onPress={() => handleSizeSelection('M')}
          />
          <SBtn
            title={'L'}
            size={selectedSize}
            onPress={() => handleSizeSelection('L')}
          />
          <SBtn
            title={'XL'}
            size={selectedSize}
            onPress={() => handleSizeSelection('XL')}
          />
        </View>
        <View style={styles.SecondView}>
          <View style={{flex: 6}}>
            <Text style={styles.lastText}>
              {counter > 0 ? item.price * counter : item.price} {item.currency}
            </Text>
          </View>
          <View style={{flex: 9, marginLeft: 20}}>
            <Btn2 title={'Add to Cart'} onPress={handleAddToCart} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    opacity: 1,
    marginBottom: 170,
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    color: '#000000',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 0.25,
    borderColor: '#F4F4F4',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  mainView: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 10,
  },
  nameText: {
    paddingBottom: 10,
    fontSize: 25,
    color: '#122311',
    fontWeight: 'bold',
  },
  txxt: {
    color: '#4C5059',
    fontSize: 18,
  },
  BtnView: {
    flex: 3,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AnimatedText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  SBtnView: {
    flexDirection: 'row',
    marginRight: 180,
    marginTop: 30,
  },
  SecondView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  lastText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    padding: 10,
  },
});

const Btn = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 42,
        height: 50,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#989494',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const SBtn = ({title, size, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 35,
        height: 40,
        backgroundColor: size === title ? '#989494' : '#EAEAEA',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 15,
          color: size === title ? '#FFFFFF' : '#6E7179',
          fontWeight: '600',
          textAlign: 'left',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Btn2 = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 160,
        height: 55,
        backgroundColor: '#989494',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#FFFFFF',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
