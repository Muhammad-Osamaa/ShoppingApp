import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';
import Homepage from '../Src/Screen/Dashboard';
import Profile from '../Src/Screen/Profile';
import Setting from '../Src/Screen/Setting';
import CustomDrawer from './CustomDrawer';
import {useNavigation} from '@react-navigation/native';
import Login from '../Src/Screen/Login';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#C4C4C4',
        drawerActiveTintColor: '#F4F4F4',
        drawerInactiveTintColor: '#000000',
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -25,
          fontFamily: 'Robot-Medium',
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
            <FontAwesome5
              name="home"
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
              name="account"
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
  );
}
