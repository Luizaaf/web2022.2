import React from "react"

const Turma = ({ children, nomeTurma }) => {
  return (
    <div>
      <h2>Turma: {nomeTurma}</h2>
      {React.Children.map(children, (elemento) => {
        return (
          React.cloneElement(elemento, { nomeTurma })
        ) 
      })}
    </div>
  )
}

export default Turma