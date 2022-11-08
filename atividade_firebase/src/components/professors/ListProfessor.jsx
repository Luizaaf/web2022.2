import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import FirebaseContext from "../../utils/FirebaseContext"
import ProfessorService from "../../services/ProfessorService"

const ListProfessorPage = () => {
    return (
        <FirebaseContext.Consumer>
            {(value) => <ListProfessor firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const ListProfessor = (props) => {

    const [professors, setProfessors] = useState([])

    useEffect(
        () => {
            ProfessorService.list(
                props.firebase.getFirestoreDb(),
                (professors) => {
                    setProfessors(professors)
                }
            )
        },
        []
    )

    const deleteProfessor = (id) => {
        if (window.confirm(("Deseja Excluir"))) {
            ProfessorService.delete(
                props.firebase.getFirestoreDb(),
                () => {
                    let ProfessorResult = professors.filter(
                        professor => professor.id !== id
                    )
                    setProfessors(ProfessorResult)
                },
                id
            )
        }
    }

    const generateTableBody = () => {
        return professors.map(
            (professor, index) => {
                return (
                    <tr key={professor.id}>
                        <td>{professor.id}</td>
                        <td>{professor.name}</td>
                        <td>{professor.course}</td>
                        <td>{professor.salary}</td>
                        <td style={{ textAlign: "center" }}>
                            <Link to={"/editProfessor/" + professor.id}>
                                <button className="btn btn-primary">Editar</button>
                            </Link>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button className="btn btn-danger" onClick={() => deleteProfessor(professor.id)}>Apagar</button>
                        </td>
                    </tr>
                )
            }
        )
    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Listar Professores</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>CURSO</th>
                        <th>SALARIO</th>
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

export default ListProfessorPage
