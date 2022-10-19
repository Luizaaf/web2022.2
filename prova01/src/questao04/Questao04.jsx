import axios from "axios"
import { useEffect, useState } from "react"

const Questao04 = () => {

  const [paises, setPaises] = useState([])

  useEffect(
    () => {
      axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
        .then(
          (response) => {
            setPaises(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )
    }, []
  )


  const getMaisPopuloso = () => {

    let maiorPopulacao = 0
    let maisPopuloso = ""
    paises.forEach((pais) => {
      if (pais.population > maiorPopulacao) {
        maiorPopulacao = pais.population
        maisPopuloso = pais.name
      }
    })

    return (
      <tr>
        <td>{maisPopuloso}</td>
        <td>{maiorPopulacao}</td>
      </tr >
    )
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan={2}>País mais populoso da Africa</th>
          </tr>
          <tr>
            <th>País</th>
            <th>Populacao</th>
          </tr>
        </thead>
        <tbody>
          {getMaisPopuloso()}
        </tbody>
      </table>
    </div>
  )
}

export default Questao04