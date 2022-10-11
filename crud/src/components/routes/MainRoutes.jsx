import { Routes, Route } from 'react-router-dom'

import Home from '../Home';
import CreateStudent from '../students/CreateStudent'
import EditStudent from '../students/EditStudent';
import ListStudent from '../students/ListStudent';
import ListLecturer from '../lecturer/ListLecturer.jsx'
import EditLecturer from '../lecturer/EditLecturer.jsx'
import CreateLecturer from "../lecturer/CreateLecturer.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='createStudent' element={<CreateStudent />} />
      <Route path='listStudent' element={<ListStudent />} />
      <Route path='editStudent/:id' element={<EditStudent />} />
      <Route path='createLecturer' element={<CreateLecturer />} />
      <Route path='listLecturer' element={<ListLecturer />} />
      <Route path='editLecturer' element={<EditLecturer />} />
    </Routes>
  )
}

export default MainRoutes