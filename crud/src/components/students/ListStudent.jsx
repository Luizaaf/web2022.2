import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListStudent = () => {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3001/students")
                .then(
                    (response) => {
                        console.log(response.data)
                        setStudents(response.data)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        []
    )

    const deleteStudent = (id) => {
        if (window.confirm(("Deseja Excluir"))) {
            axios.delete("http://localhost:3001/students/"+id)
            .then(response => {
                console.log("Ok")
            })
            .catch(error => console.log(error))
        }
    }

    const generateTableBody = () => {
        return students.map(
            (student, index) => {
                return (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.ira}</td>
                        <td style={{ textAlign: "center" }}>
                            <Link to={"/editStudent/"+student.id}>
                                <button className="btn btn-primary">Editar</button>
                            </Link>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Apagar</button>
                        </td>
                    </tr>
                )
            }
        )
    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Listar Estudantes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>CURSO</th>
                        <th>IRA</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent
