import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const EditStudent = (props) => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [ira, setIra] = useState(0.0)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const newStudent = {
            name,
            course,
            ira
        }
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
                        onChange={
                            (event) => {

                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Curso: </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={
                            (event) => {

                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>IRA: </label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={
                            (event) => {

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