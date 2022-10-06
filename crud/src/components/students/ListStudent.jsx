import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const ListStudent = ()=> {
    
    const [students, setStudents] = useState([])
    
    useEffect(
        () => {
            axios.get("http://localhost:3001/students")
            .then(
                (response) => {
                    setStudents(response.data)
                }
            ).catch (
                (error) => {
                    console.log(error)
                }
            )
        },
        []
    )

    const generateTableBody = () => {
        return students.map(
            (element, index) => {
                element.key = index
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                    </tr>
                )
            }
        )
    }


    return (
        <div>
            <h1>Listar Estudantes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curos</th>
                        <th>IRA</th>
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