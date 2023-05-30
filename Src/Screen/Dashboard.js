import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from '../Components/Card';
import data from './data';
import Cart from './Cart';
import {useState} from 'react';
import {useEffect} from 'react';

export default function Homepage() {
  // console.log('here i am---->', data);
  const renderItem = ({item, index}) => <Card key={item?.id} item={item} />;

  // const [data,setData]= useState([]);

  // useEffect(()=>{
  //   setData(data);
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      {/* <View>
      {data.map((data) => (
         key= {id,name,price,currency,imagePath}
      ))}
      <Cart />
    </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  title: {
    fontSize: 32,
  },
});
