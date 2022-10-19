import axios from "axios"
import { useEffect, useState } from "react"

const Questao05 = () => {

  const [paises, setPaises] = useState([])
  const [continente, setContinente] = useState('africa')

  useEffect(
    () => {
      axios.get("https://restcountries.com/v2/region/" + continente + "?fields=name,population")
        .then(
          (response) => {
            setPaises(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )
    }, [continente]
  )

  const getFunction = () => {
    if (continente === "asia") {
      return getMenosPopuloso()
    } else {
      return getMaisPopuloso()
    }
  }

  const getMaisPopuloso = () => {

    let maiorPopulacao = 0
    let maisPopuloso = ""
    paises.forEach((pais, index) => {
      if (index === 0) {
        maiorPopulacao = pais.population
        maisPopuloso = pais.name
      }

      if (pais.population > maiorPopulacao) {
        maiorPopulacao = pais.population
        maisPopuloso = pais.name
      }
    })

    return (
      <tr>
        <td>{maisPopuloso}</td>
        <td>{maiorPopulacao}</td>
      </tr>
    )
  }

  const getMenosPopuloso = () => {
    
    let menorPopulacao = 0
    let menosPopuloso = ""
    paises.forEach((pais, index) => {
      if (index === 0) {
        menorPopulacao = pais.population
        menosPopuloso = pais.name
      }

      if (pais.population < menorPopulacao) {
        menorPopulacao = pais.population
        menosPopuloso = pais.name
      }
    })

    return (
      <tr>
        <td>{menosPopuloso}</td>
        <td>{menorPopulacao}</td>
      </tr>
    )
  }

  const getTableTitle = () => {
    if (continente === "asia") {
      return "País menos populoso da Asia"
    } 
    if (continente === "americas") {
      return "País mais populoso das Americas"
    }

    return "País mais populoso da Africa"
  }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan={2}>{getTableTitle()}</th>
          </tr>
          <tr>
            <th>País</th>
            <th>Populacao</th>
          </tr>
        </thead>
        <tbody>
          {getFunction()}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => setContinente("americas")} style={{ marginRight: "2rem"}}>Americas</button>
      <button className="btn btn-primary" onClick={() => setContinente("asia")}>Asia</button>
    </div>
  )
}

export default Questao05