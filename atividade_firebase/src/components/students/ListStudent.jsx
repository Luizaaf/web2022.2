import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import FirebaseContext from "../../utils/FirebaseContext"
import StudentService from "../../services/StudentService"

const ListStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {(value) => <ListStudent firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = (props) => {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            StudentService.list(
                props.firebase.getFirestoreDb(),
                (students) => {
                    setStudents(students)
                }
            )
        },
        []
    )

    const deleteStudent = (id) => {
        if (window.confirm(("Deseja Excluir"))) {
            StudentService.delete(
                props.firebase.getFirestoreDb(),
                () => {
                    let studentResult = students.filter(
                        student => student.id !== id
                    )
                    setStudents(studentResult)
                },
                id
            )
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
                            <Link to={"/editStudent/" + student.id}>
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

export default ListStudentPage
