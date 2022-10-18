import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"

const EditStudent = (props) => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState(0.0)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    axios.get("http://localhost:3001/students/"+params.id)
    .then(response => {
      setName(response.data.name)
      setCourse(response.data.course)
      setIra(response.data.ira)
    })
    .catch(error => console.log(error))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const studentUpdate = {
      name,
      course,
      ira
    }

    axios.put("http://localhost:3001/students/"+params.id, studentUpdate).
    then(response => {
      navigate("/listStudent")
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h2>Editar Estudante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            value={name ?? ""}
            onChange={
              (event) => {
                setName(event.target.value)
              }
            }
          />
        </div>
        <div className="form-group">
          <label>Curso: </label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            onChange={
              (event) => {
                setCourse(event.target.value)
              }
            }
          />
        </div>
        <div className="form-group">
          <label>IRA: </label>
          <input
            type="number"
            className="form-control"
            value={ira ?? 0}
            onChange={
              (event) => {
                setIra(event.target.value)
              }
            }
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary" style={{ marginTop: "12px" }}>
            Editar Estudante
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditStudent