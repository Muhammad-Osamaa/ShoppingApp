import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Cart from './Cart';
import data from './data';
import CartContext from '../Components/Context/CartContext';
// import { getData } from './data';

const animationTime = 500;

export default function CardView({route, navigation}) {
  // Accessing the item from the route.params object
  const item = route.params.item;
  // const {addToCart} = useContext(CartContext);

  // const handleAddToCart = ()=>{
  //   addToCart(navigation.navigate(Cart));
  // };
  // const [data,setData] = useState({});
  // const {addItemToCart} = useContext(CartContext);

  // useEffect(()=>{
  //   setData(getData(itemId));
  // }, []);

  // function onAddToCart(){
  //   addItemToCart;
  // }

  const {addToCart} = useContext(CartContext);
  let [counter, setCounter] = React.useState(1);
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
  const [selectedSize,setSelectedSize]= useState('');
  const handleSizeSelection =(size)=>{
    setSelectedSize(size);
  };

  return (
    <>
      <Image source={item.imagePath} style={styles.image} />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 25,
            paddingLeft: 20,
            paddingRight: 10,
          }}>
          <View style={{flex: 9, justifyContent: 'center'}}>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: 25,
                color: '#122311',
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text style={{color: '#4C5059', fontSize: 18}}>
              Complete set of Agba, Buba, Trousers and Cap for Men. Suitable for
              Owambe Events. It can be worn without the Agbada.
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              paddingLeft: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Btn title={'+'} onPress={increment} />
            <Animated.Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                transform: [{scale}],
              }}>
              {counter}
            </Animated.Text>
            <Btn title={'-'} onPress={decrement} />
          </View>
        </View>
        <View flexDirection="row" style={{marginRight: 180, marginTop: 30}}>
          <SBtn title={'M'} size={selectedSize} onPress={()=> handleSizeSelection('M')} />
          <SBtn title={'L'} size={selectedSize} onPress={()=> handleSizeSelection('L')} />
          <SBtn title={'XL'} size={selectedSize} onPress={()=> handleSizeSelection('XL')}/>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <View style={{flex: 6}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center',
              }}>
              {counter > 0 ? item.price * counter : item.price} {item.currency}
            </Text>
          </View>
          <View style={{flex: 9, marginLeft: 20}}>
            <Btn2
              title={'Add to Cart'}
              onPress={() => {
                addToCart({...item,total:counter,price:totalPrice,size:selectedSize });
                navigation.navigate('Carts');
              }}
            />
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
const SBtn = ({title,size,onPress}) => {
  
  
  return (
    <TouchableOpacity
      style={{
        width: 35,
        height: 40,
        backgroundColor: size === title ? '#989494':'#EAEAEA',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
      }} onPress={onPress}>
      <Text
        style={{
          fontSize: 15,
          color: size === title?'#FFFFFF':'#6E7179',
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
