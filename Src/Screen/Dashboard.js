import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from '../Components/Card';
import data from './data';
import Cart from './Cart';
import {useState} from 'react';
import {useEffect} from 'react';

export default function Homepage() {
  const renderItem = ({item, index}) => <Card key={item?.id} item={item} />;

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
