import React from 'react';
import Navbar from './components/NavBar';
import Rodape from './components/rodape';
import './components/style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <img src='https://th.bing.com/th/id/R.f9c88207423ebcfb6b9844baaa2eeace?rik=36THUdEqg1PtGA&pid=ImgRaw&r=0' />
          <h1>Projeto React Native</h1>
          <p>O React é uma ferramenta que permite criar aplicações web,
            e o React Native é uma estrutura par acriar aplicações móveis.
            Ambos compartilham muitos conceitos e sintaxe.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TEhjpIoP1Pg?si=K9Mec6pcpoqCIxG3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
