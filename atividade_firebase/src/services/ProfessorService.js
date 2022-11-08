import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"

class ProfessorService {

  static list = (firestoreDb, callback) => {
    getDocs(collection(firestoreDb, 'professor'))
      .then((professorSnapshot) => {
        const professors = []
        professorSnapshot.forEach((professor) => {
          const id = professor.id
          const { name, course, salary } = professor.data()
          professors.push({ id, name, course, salary })
        }
        )
        callback(professors)
      }
      )
      .catch(err => console.log(err))
  }

  static add = (firestoreDb, callback, professor) => {
    addDoc(collection(firestoreDb, 'professor'), professor)
      .then(
        docRef => callback(docRef.id)
      )
      .catch(err => console.log(err))
  }

  static retrieve = (firestoreDb, callback, id) => {
    getDoc(doc(firestoreDb, 'professor', id))
      .then(
        (docSnap) => {
          if (docSnap.exists()) {
            callback(docSnap.data())
          }
        }
      )
      .catch(err => console.log(err))
  }

  static update = (firestoreDb, callback, id, professor) => {
    updateDoc(
      doc(firestoreDb, 'professor', id),
      professor)
      .then(
        () => callback(true)
      )
      .catch(err => console.log(err))
  }

  static delete = (firestoreDb, callback, id) => {
    deleteDoc(doc(firestoreDb, 'professor', id))
    .then(() => callback(true))
    .catch(err => console.log(err))
  }
}

export default ProfessorService
