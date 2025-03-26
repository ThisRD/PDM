import React from 'react';
import Navbar from './components/NavBar';
import Rodape from './components/rodape';
import { View, Image, StyleSheet } from 'react-native';
import './components/style.css'

function App() {
  return (
    <div id='app' className="App">
      <Navbar />
      <main>
        <section id="home">
          <h1>Raydson Isidorio da Silva</h1><br /><br /><br />
          <View style={styles.container}>
            <Image source={require("./assets/Solares.png")} style={styles.imagem} />
          </View>
          <br /><br /><br />
          <p>
          Gosto de dormir comer e jogar video game, sou um de 5 irmaos, tenho 2 irmãos e 2 irmãs, <br /> 
  sou o irmao do meio, tenho 17 anos e sou estudante de desenvolvimento de sistemas.<br /> 
  PS: AMO MINHA NAMORADA<br /><br /><br />
  ❤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤❤ <br />
  ❤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤ <br />
  ❤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤❤ <br />
  ❤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤ <br />
  ❤❤❤❤&nbsp;&nbsp;❤❤❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤❤❤❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❤  <br />
         </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
  }

});