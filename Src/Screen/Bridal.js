import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Bridal() {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../Image/yellowCouple.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          Complete set of Agba, Buba, Trousers and Cap for Men.Suitable for
          Owambe Events. It can be worn without the Agbada
        </Text>
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
    height: 200,
    paddingTop: 100,
    paddingBottom: 50,
    overflow: 'hidden',
    opacity: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    color: '#000000',
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'auto',
    padding: 10,
  },
});
