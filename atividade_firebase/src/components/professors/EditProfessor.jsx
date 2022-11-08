import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

import FirebaseContext from "../../utils/FirebaseContext"
import ProfessorService from "../../services/ProfessorService"

const EditProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {value => <EditProfessor firebase={value} />}
    </FirebaseContext.Consumer>
  )
}

const EditProfessor = (props) => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [salary, setSalary] = useState(0.0)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    ProfessorService.retrieve(
      props.firebase.getFirestoreDb(),
      (professors) => {
        setName(professors.name)
        setCourse(professors.course)
        setSalary(professors.salary)
      },
      params.id
    )
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const professorUpdate = {
      name,
      course,
      salary
    }
    ProfessorService.update(
      props.firebase.getFirestoreDb(),
      result => navigate('/listProfessor'),
      params.id,
      professorUpdate
    )
  }

  return (
    <div>
      <h2>Editar Professor</h2>
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
          <label>Salario: </label>
          <input
            type="number"
            className="form-control"
            value={salary ?? 0}
            onChange={
              (event) => {
                setSalary(event.target.value)
              }
            }
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary" style={{ marginTop: "12px" }}>
            Editar Professor
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfessorPage