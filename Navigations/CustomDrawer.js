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
        contentContainerStyle={{backgroundColor: '#F4F4F4'}}>
        <ImageBackground
          source={require('../Src/Image/whiteBalls.jpg')}
          style={styles.imageBackground}>
          {/* <Image
             source={require('../Src/Image/thumb_coin.jpg')}
            style={styles.image}
          /> */}
          <Text
            style={styles.nameText}>
            MuhammaD OsaMa
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.logoutButton}>
            <FontAwesome
              name="sign-out"
              size={20}
              color={isFocused ? '#000000' : '#F4F4F4'}
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>LogOut</Text>
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
    paddingVertical:80
      
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingLeft:25,
    position:'absolute',
    paddingTop:20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
