import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"

class StudentService {

  static list = (firestoreDb, callback) => {
    getDocs(collection(firestoreDb, 'students'))
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

  static add = (firestoreDb, callback, student) => {
    addDoc(collection(firestoreDb, 'students'), student)
      .then(
        docRef => callback(docRef.id)
      )
      .catch(err => console.log(err))
  }

  static retrieve = (firestoreDb, callback, id) => {
    getDoc(doc(firestoreDb, 'students', id))
      .then(
        (docSnap) => {
          if (docSnap.exists()) {
            callback(docSnap.data())
          }
        }
      )
      .catch(err => console.log(err))
  }

  static update = (firestoreDb, callback, id, student) => {
    updateDoc(
      doc(firestoreDb, 'students', id),
      student)
      .then(
        () => callback(true)
      )
      .catch(err => console.log(err))
  }

  static delete = (firestoreDb, callback, id) => {
    deleteDoc(doc(firestoreDb, 'students', id))
    .then(() => callback(true))
    .catch(err => console.log(err))
  }
}

export default StudentService
