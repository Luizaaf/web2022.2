import './App.css';
// import VotaCidades from './components/cidades/VotaCidades'
// import { Grupo } from './components/childrens/Grupo'
// import { Heroi } from './components/childrens/Heroi'
// import { Imc } from './components/imc/Imc'
// import Pai from './components/pai&filho/Pai';
// import MinhaClasse from './components/classes/MinhaClasse';
import Curso from './components/universidade/Curso';
import Turma from './components/universidade/Turma';
import Estudante from './components/universidade/Estudante'

function App() {
  return (
    <div className="App">
      {/* <VotaCidades /> */}
      {/* <Grupo titulo="Liga da Justiça">
        <Heroi nome="BatMan" />
        <Heroi nome="SuperMan"/>
        <Heroi nome="Wonder Maravilha"/> 
      </Grupo> */}
      {/* <Imc peso={75} altura={1.80}/> */}
      {/* <Pai /> */}
      {/* <MinhaClasse nome="Luiz" /> */}
      <Curso nomeCurso="RC">
        <Turma nomeTurma="WEB">
          <Estudante nomeEstudante="Luiz" />
          <Estudante nomeEstudante="Matheus" />
        </Turma>
        <Turma nomeTurma="PIRC">
          <Estudante nomeEstudante="Vittor" />
        </Turma>
      </Curso>
    </div>
  );
}

export default App;
