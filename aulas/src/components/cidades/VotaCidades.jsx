import React from 'react'
import { useState } from 'react'

export default function VotaCidades() {

  const [quixada, setQuixada] = useState(0)
  const [limoeiro, setLimoeiro] = useState(0)
  const [crateus, setCrateus] = useState(0)
  
  function votaQuixada() {
    setQuixada(quixada + 1)
  }

  function votaLimoeiro() {
    setLimoeiro(limoeiro + 1)
  }

  function votaCrateus() {
    setCrateus(crateus + 1)
  }
  
  function resetaVotacao() {
    setQuixada(0)
    setLimoeiro(0)
    setCrateus(0)
  }

  function encerraVotacao() {
    if (quixada >= limoeiro && quixada >= crateus) {
      if (quixada === limoeiro) {
        alert("Houve um empate entre Quixadá e Limoeiro")
      } else if (quixada === crateus) {
        alert("Houve um empate entre Quixadá e Crateús")
      } else {
        alert("Quixadá Venceu")
      }
    } else if (limoeiro >= quixada && limoeiro >= crateus) {
      if (limoeiro === quixada) {
        alert("Houve um empate entre Limoeiro e Quixadá")  
      } else if (limoeiro === crateus) {
        alert("Houve um empate entre Limoeiro e Crateús")
      } else {
        alert("Limoeiro Venceu")
      }
    } else {
      if (crateus === quixada) {
        alert("Houve um empate entre Crateús e Quixadá")
      } else if (crateus === limoeiro) {
        alert("Houve um empate entre Crateús e Limoeiro")
      } else {
        alert("Crateús Venceu")  
      }
    }

    resetaVotacao()
  }

  return (
    <div>
      <div>
        <h2>Quixadá: {quixada}</h2>
        <h2>Limoeiro do Norte: {limoeiro}</h2>
        <h2>Crateús: {crateus}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: "8px",
          }}>
          <button onClick={votaQuixada}>Votar Quixadá</button>
          <button onClick={votaLimoeiro}>Votar Limoeiro do Norte</button>
          <button onClick={votaCrateus}>Votar Crateús</button>
        </div>
        
        <button onClick={encerraVotacao}>ENCERRAR VOTAÇÃO</button>
      </div>
    </div>

  )
}
