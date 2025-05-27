import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../telas/HomeScreen';
import SettingsScreen from '../telas/SettingsScreen';
// import ProfileScreen from '../telas/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
