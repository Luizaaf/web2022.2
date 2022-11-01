import { collection, getDocs } from "firebase/firestore"

class StudentService {

  static list = (firestoreDb, callback) => {
    getDocs(collection(firestoreDb, 'student'))
      .then((studentSnapshot) => {
        const students = []
        studentSnapshot.forEach((student) => {
          const id = student.id
          const { name, course, ira } = student.data()
          students.push({ id, name, course, ira })
        }
        )
        callback(students)
      }
      )
      .catch(err => console.log(err)) 
  }
}

export default StudentService
