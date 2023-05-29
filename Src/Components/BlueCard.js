import React from 'react';
import {View, Image, Text} from 'react-native';

const BlueCard = ({img}) => {
  return (
    <>
      <View style={{flex: 1, width: '100%'}}>
        <Image
          source={img}
          style={{
            borderRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            marginLeft: 10,
            height: 174,
          }}
        />
      </View>
    </>
  );
};

export default BlueCard;
