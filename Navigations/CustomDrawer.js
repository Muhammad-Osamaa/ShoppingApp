import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C4C4C4'}}>
        <ImageBackground
          source={require('../Src/Image/dot_circle.jpg')}
          style={styles.imageBackground}>
          <Image
            source={require('../Src/Image/thumb_coin.jpg')}
            style={styles.image}
          />
          <Text
            style={styles.firstText}>
            MuhammaD OsaMa
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.mainView}>
        <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
          <View style={styles.secondView}>
            <Text
              style={styles.secondText}>
              LogOut
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        padding: 20,
    },
    image:{
        height: 80,
        width: '80',
        borderRadius: 40,
        marginBottom: 10,
    },
    mainView:{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    secondView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableOpacity:{
        paddingVertical: 15,
    },
    firstText:{
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
    },
    secondText:{
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        marginLeft: 5,
    },

})
