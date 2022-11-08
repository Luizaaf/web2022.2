import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

import FirebaseContext from "../../utils/FirebaseContext"
import StudentService from "../../services/StudentService"

const EditStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {value => <EditStudent firebase={value} />}
    </FirebaseContext.Consumer>
  )
}

const EditStudent = (props) => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState(0.0)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    StudentService.retrieve(
      props.firebase.getFirestoreDb(),
      (students) => {
        setName(students.name)
        setCourse(students.course)
        setIra(students.ira)
      },
      params.id
    )
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const studentUpdate = {
      name,
      course,
      ira
    }
    StudentService.update(
      props.firebase.getFirestoreDb(),
      result => navigate('/listStudent'),
      params.id,
      studentUpdate
    )
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

export default EditStudentPage