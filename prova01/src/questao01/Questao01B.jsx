
const Questao01B = () => {

  let disciplinas = ["Desenvolvimento WEB", "Gestão de Projetos", "Projeto Integrado em Redes de Computadores"]

  const imprimiDisciplinas = () => {
    return disciplinas.map(
      (disciplina, index) => {
        return (
          <h4 key={index}>{disciplina}</h4>
        )
      }
    )
  }

  return (
    <div>
      <h3>Disciplinas</h3>
      {imprimiDisciplinas()}
    </div>
  )
}

export default Questao01B