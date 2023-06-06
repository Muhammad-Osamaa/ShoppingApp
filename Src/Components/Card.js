import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({item}) => {
  const navigation = useNavigation();
  const ViewCard = item => navigation.navigate('CardView', {item: item});

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => ViewCard(item)}>
          <View style={styles.mainView}>
            <Image source={item.imagePath} style={styles.image} />
          </View>
          <View style={styles.secondView}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.secondText}>{item.price}</Text>

              <Text style={styles.thirdText}>{item.currency}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Card;
const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingTop: 25,
    paddingLeft: 10,
  },
  mainView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexDirection: 'row',
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '200%',
    height: 200,
  },
  secondView: {
    flex: 12,
    borderWidth: 0.5,
    width: '200%',
    backgroundColor: '#F2F2F2',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#ccc',
  },
  text: {
    flex: 8,
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    color: '#222222',
    paddingTop: 5,
  },
  secondText: {
    paddingLeft: 10,
    fontSize: 18,
    flex: 9,
    textAlign: 'center',
    color: '#308538',
    paddingBottom: 10,
  },
  thirdText: {
    flex: 6,
    paddingRight: 10,
    alignItems: 'flex-start',
    textAlign: 'left',
    fontSize: 18,
    color: '#308538',
    paddingBottom: 10,
  },
});
