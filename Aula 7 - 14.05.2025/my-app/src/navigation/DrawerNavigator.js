import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../telas/ProfileScreen';
import SettingsScreen from '../telas/SettingsScreen';
import HomeScreen from '../telas/HomeScreen';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={HomeScreen} options={{ title: 'Principal' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Drawer.Screen name="Settings" component={BottomTabNavigator} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;


