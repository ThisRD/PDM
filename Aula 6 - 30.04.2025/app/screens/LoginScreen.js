import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import getStyles from '../src/styles/SettingsScreenStyle';
import theme from './SettingsScreen';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const styles = getStyles(theme);


  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        drawerLockMode: 'locked-closed',
        headerShown: false, 
      });
    }, [navigation])
  );

  const handleLogin = () => {
    if (username === 'aluno' && password === 'Senai1234') {
      navigation.navigate('Home');
    } else if (username === 'root' && password === 'root') {
      navigation.navigate('Screen');
    } else {
      setErrorMessage('Usuário ou senha inválidos!');
      setTimeout(() => { setErrorMessage(''); }, 2000);
    }
  };

  const handleRegister = () => {
    navigation.navigate('cadastro');
  }

  const handleForgotPassword = () => {
    navigation.navigate('ForgotSenha');
  };
  return (
    <View style={styles.containerLogin}>
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Image source={require('../assets/logo.png')} resizeMode='contain' />
        </View>
      </View>

      <Text style={styles.titleLogin}>bem-vindo!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername} />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword} />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Esqueci minha senha!</Text>
      </TouchableOpacity>
    </View>
  )
}
