import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState,useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const animaationTime = 500;
export default function CounterSize({route}){
    const navigation = useNavigation();
    const item = route.params.item;
    const [counter,setCounter]= useState(1);
    const totalPrice = item.price*counter;
    const animatedValue = React.useRef(new Animated.Value(0)).current;


    const startAnimation = value=>{
        return Animated.spring(animatedValue,{
            toValue: value,
            useNativeDriver: true,
            damping: 15,
        });
    };
    const increment= ()=>{
        const newValue = counter+1;
        setCounter(newValue);
        startAnimation(1).start();
        setTimeout(()=>{
            startAnimation(0).start();
        },animaationTime);
    };
    const decrement = ()=>{
        const newValue = counter-1;
       if(counter > 1){
        setCounter(newValue);
        startAnimation(0).start();
        setTimeout(() => {},animaationTime);
       }
    };
    const scale = animatedValue.interpolate({
        inputRange:[-1, 0, 1],
        outputRange:[0.5, 1, 1.2],
        extrapolate:'clamp',
    });
    const [selectedSize,setSelectedSize]= useState('');
    const handleSizeSelection = size=>{
        setSelectedSize(size);
    };

return(
    <View style={styles.container}>
        <View style={styles.counterBtn}>
            <Btn title={'+'} onPress={increment}/>
            <Animated.Text style={[styles.AnimatedText,{transform:[{scale}] }]}>
                {counter}
            </Animated.Text>
            <Btn title={'-'} onPress={decrement}/>
        </View>
        <View style={styles.SBtnView}>
            <SBtn
                title={'M'}
                size={selectedSize}
                onPress={()=>handleSizeSelection('L')}
            />
            <SBtn
                title={'L'}
                size={selectedSize}
                onPress={ () => handleSizeSelection('XL')}
            />
            <SBtn
                title={'XL'}
                size= {selectedSize}
                onPress={()=>handleSizeSelection('M')}
            />
        </View>
        <View style={styles.secondView}>
            <Text style={styles.txt}>
                {counter > 0 ? item.price*counter : item.price}{item.currency}
            </Text>
        </View>

    </View>
)
}