import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C4C4C4'}}>
        <ImageBackground
          source={require('../Src/Image/dot_circle.jpg')}
          style={styles.imageBackground}>
          <Image
            // source={require('../Src/Image/thumb_coin.jpg')}
            style={styles.image}
          />
          {/* <Text
            style={styles.firstText}>
            MuhammaD OsaMa
          </Text> */}
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.touchableOpacity}>
          <View style={styles.secondView}>
            <FontAwesome
              name="sign-out"
              size={20}
              color={isFocused ? '#F4F4F4' : '#000000'}
            />
            <Text style={styles.secondText}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    padding: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  mainView: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginBottom: 20,
  },
  secondView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    paddingVertical: 15,
  },
  firstText: {
    color: '#000000',
    fontSize: 18,
    marginTop: 50,
    fontFamily: 'Roboto-Medium',
  },
  secondText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
});
