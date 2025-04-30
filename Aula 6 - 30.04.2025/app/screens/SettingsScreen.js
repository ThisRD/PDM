//sreens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text,Switch, Button, Alert, Picker, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/SettingsScreenStyle';

export default function SettingsScreen() {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const [isAirplaneModeEnabled, setIsAirplaneModeEnabled] = useState(false);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('pt');
    const navigation = useNavigation();

    const toggleNotifications = () => {
        setIsNotificationsEnabled(previous => !previous);
    };

    const toggleAirplaneMode = () => {
        setIsAirplaneModeEnabled(previous => !previous);
    };

    const handleLogout = () => {
        Alert.alert('Logout', 'Você saiu da conta com sucesso.');
        navigation.navigate('Sair')
    };

    const handleChangePassword = () => {
        Alert.alert('Alterar Senha', 'Funcionalidade ainda não implementada.');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>

            {/* Notificações */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Notificações</Text>
                <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
            </View>

            {/* Tema */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Tema</Text>
                <Picker
                    selectedValue={theme}
                    style={styles.picker}
                    onValueChange={(itemValue) => setTheme(itemValue)}
                >
                    <Picker.Item label="Claro" value="light" />
                    <Picker.Item label="Escuro" value="dark" />
                </Picker>
            </View>

            {/* Idioma */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Idioma</Text>
                <Picker
                    selectedValue={language}
                    style={styles.picker}
                    onValueChange={(itemValue) => setLanguage(itemValue)}
                >
                    <Picker.Item label="Português" value="pt" />
                    <Picker.Item label="Inglês" value="en" />
                    <Picker.Item label="Espanhol" value="es" />
                </Picker>
            </View>

            {/* Modo Avião */}
            <View style={styles.settingItem}>
                <Text style={styles.label}>Modo Avião</Text>
                <Switch value={isAirplaneModeEnabled} onValueChange={toggleAirplaneMode} />
            </View>

            {/* Alterar senha */}
            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>Alterar Senha</Text>
            </TouchableOpacity>

            {/* Logout */}
            <View style={styles.logoutButton} >
                <Button title="Sair" onPress={handleLogout} color="#d9534f" />
            </View>

            {/* Sobre o app */}
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutText}>Versão do App: 1.0.0</Text>
                <Text style={styles.aboutText}>Desenvolvido por Raydson</Text>
            </View>
        </View>
    );
}

