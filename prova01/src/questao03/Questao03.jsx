import axios from "axios"
import { useEffect, useState } from "react"

const Questao03 = () => {

  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(
    () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + offset)
        .then(
          (response) => {
            setPokemons(response.data.results)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )
    }, [offset]
  )

  const showPokemons = () => {
    return pokemons.map(
      (pokemon, index) => {
        return (
          <tr key={index}>
            <td>{pokemon.name}</td>
          </tr>
        )
      }
    )
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pokemons</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showPokemons()}
        </tbody>
      </table>
      <button 
      className="btn btn-primary"
      onClick={() => setOffset(offset + 10)}>MAIS POKEMONS</button>
    </div>
  )
}

export default Questao03