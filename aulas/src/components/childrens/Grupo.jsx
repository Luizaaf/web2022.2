import React from "react"

export const Grupo = ({ children, titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {
        React.Children.map(children, (elemento) => {
          return (
            React.cloneElement(elemento, {titulo})
          )
        })
      }
    </div>
  )
}