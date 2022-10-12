import { useState } from "react"

const Questao02 = () => {

  const [number01, setNumber01] = useState(0.0)
  const [number02, setNumber02] = useState(0.0)
  const [resultado, setResultado] = useState(0.0)

  const soma = () => {
    setResultado(Number(number01) + Number(number02))
  }

  const subtracao = () => {
    setResultado(Number(number01) - Number(number02))
  }

  const multiplicao = () => {
    setResultado(Number(number01) * Number(number02))
  }

  const divisao = () => {
    setResultado((Number(number01) / Number(number02)).toFixed(2))
  }

  return (
    <div>
      <div className="d-flex justify-content-center" style={{ padding: "1rem" }}>
        <div style={{ marginRight: "1rem" }}>
          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Número 01"
            onChange={e => setNumber01(e.target.value)} />
        </div>
        <div>
          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Número 02"
            onChange={e => setNumber02(e.target.value)} />
        </div>
      </div>
      <div style={{ padding: "1rem" }}>
        <button
          style={{ marginRight: "1rem" }}
          className="btn btn-primary"
          onClick={soma} >+</button>
        <button
          style={{ marginRight: "1rem" }}
          className="btn btn-primary"
          onClick={subtracao}>-</button>
        <button
          style={{ marginRight: "1rem" }}
          className="btn btn-primary"
          onClick={multiplicao}>*</button>
        <button
          className="btn btn-primary"
          onClick={divisao}>/</button>
      </div>
      <h4>Resultado: {resultado}</h4>
    </div>
  )
}

export default Questao02