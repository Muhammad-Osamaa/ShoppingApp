import React from 'react';
import {DrawerContentScrollView, DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Homepage from '../Src/Screen/Dashboard';
import Profile from '../Src/Screen/Profile';
import Setting from '../Src/Screen/Setting';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props)=>{
  const navigation = useNavigation();
  const handleLogout = () =>{
    navigation.navigate('Login');
  };
  return(
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Home"
          onPress={()=> props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Profile"
          onPress={()=> props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Setting"
          onPress={()=> props.navigation.navigate('Setting')}
        />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  logoutButton:{
    width: '80%',
    borderRadius: 20,
    height: 50,
    borderColor:'#000000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#989494',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButtonText:{
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 10
    
  },
});

export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Home"
        drawerContent={(props)=> <CustomDrawerContent{...props}/>}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#C4C4C4',
          },
          drawerActiveTintColor: '#F4F4F4',
          drawerInactiveTintColor: '#000000',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerIconStyle: {
            marginRight: -5,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Homepage}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <FontAwesome5Icon
                name="Home"
                size={size}
                color={focused ? '#F4F4F4' : '#000000'}
              />
  ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={size}
                color={focused ? '#F4F4F4' : '#000000'}
              />
  ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            drawerIcon: ({focused, size}) => (
              <AntDesign
                name="setting"
                size={size}
                color={focused ? '#F4F4F4' : '#000000'}
              />
  ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
