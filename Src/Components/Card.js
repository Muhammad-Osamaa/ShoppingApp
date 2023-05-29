import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({item}) => {
  const navigation = useNavigation();
  const ViewCard = item => navigation.navigate('CardView', {item: item});

  return (
    <>
      <View style={{width: '50%', paddingTop: 25, paddingLeft: 10}}>
        <TouchableOpacity onPress={() => ViewCard(item)}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <Image
              source={item.imagePath}
              style={{
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                width: '200%',
                height: 200,
              }}
            />
          </View>
          <View
            style={{
              flex: 12,
              borderWidth: 0.5,
              width: '200%',
              backgroundColor: '#F2F2F2',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              borderColor: '#ccc',
            }}>
            <Text
              style={{
                flex: 8,
                fontSize: 22,
                alignItems: 'center',
                textAlign: 'center',
                color: '#222222',
                paddingTop: 5,
              }}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 18,
                  flex: 9,
                  textAlign: 'center',
                  color: '#308538',
                  paddingBottom: 10,
                }}>
                {item.price}
              </Text>

              <Text
                style={{
                  flex: 6,
                  paddingRight: 10,
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  fontSize: 18,
                  color: '#308538',
                  paddingBottom: 10,
                }}>
                {item.currency}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Card;
