
const Curso = ({ children, nomeCurso }) => {
  return (
    <div>
      <h2>
        Curso: {nomeCurso}
      </h2>
      {children}
    </div>
  )
}

export default Curso