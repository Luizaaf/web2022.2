import { useState } from "react"
import { useNavigate } from "react-router-dom"

import FirebaseContext from "../../utils/FirebaseContext"
import StudentService from "../../services/StudentService"

const CreateStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <CreateStudent firebase={value} />}
    </FirebaseContext.Consumer>
  )
}

const CreateStudent = (props) => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState(0.0)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newStudent = { name, course, ira }
    StudentService.add(
      props.firebase.getFirestoreDb(),
      (id) => {
        alert(`Estudante ${id} adicionado!`)
        navigate('/listStudent')
      },
      newStudent
    )
  }

  return (
    <div>
      <h2>Criar Estudante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
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
            placeholder="Digite seu curso"
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
            step="any"
            className="form-control"
            placeholder="Digite seu ira"
            onChange={
              (event) => {
                setIra(event.target.value)
              }
            }
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" style={{ marginTop: "12px" }}>
            Criar Estudante
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateStudentPage