import 'bootstrap/dist/css/bootstrap.min.css';
import World from './resolucao/World';
import Arena from './resolucao/Arena';
import Hero from './resolucao/Hero';
import Enemy from './resolucao/Enemy';
import caminho from './img/caminhos';

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="DC Arena">
          <Hero name="Batman" img={caminho.batman}/>
          <h1>VS</h1>
          <Enemy name="Coringa" img={caminho.coringa}/>
        </Arena>
        <Arena arena="Arena Infantil">
          <Hero name="Mickey" img={caminho.mickey}/>
          <h1>VS</h1>
          <Enemy name="Pernalonga" img={caminho.pernalonga}/>
        </Arena>
        <Arena arena="Arena Mitologica">
          <Hero name="Zeus" img={caminho.zeus}/>
          <h1>VS</h1>
          <Enemy name="Odin" img={caminho.odin}/>
        </Arena>
      </World>
    </div>
  );
}

export default App;
