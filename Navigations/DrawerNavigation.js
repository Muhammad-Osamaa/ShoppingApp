import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Homepage from '../Src/Screen/Dashboard';
import Profile from '../Src/Screen/Profile';
import Setting from '../Src/Screen/Setting';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Homepage"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#C4C4C4',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Homepage}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => {
              <FontAwesome5Icon
                name="Home"
                size={size}
                color={focused ? '#F4F4F4' : '#F4F4F4'}
              />;
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            drawerIcon: ({focused, size}) => {
              <MaterialCommunityIcons
                name="face-man-profile"
                size={size}
                color={focused ? '#C4C4C4' : '#000000'}
              />;
            },
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            drawerIcon: ({focused, size}) => {
              <AntDesign
                name="setting"
                size={size}
                color={focused ? '#C4C4C4' : '#000000'}
              />;
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
