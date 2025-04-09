import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Screen" component={SettingsScreen}/>
                <Drawer.Screen name="About" component={AboutScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;