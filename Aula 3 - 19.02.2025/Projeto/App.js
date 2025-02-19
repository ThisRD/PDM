import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Navbar    from './components/navbar';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar 
      title="Meu Mundo"
      onLeftPress={() => {
        console.log("Voltar");
      }}
      onRightPress={() => {
        console.log("Avançar");
      }}
      />
      <Text>Vai Corinthians</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
