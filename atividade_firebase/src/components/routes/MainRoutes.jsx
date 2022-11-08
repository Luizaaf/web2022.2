import { Routes, Route } from 'react-router-dom'

import Home from '../Home';
import CreateProfessor from '../professors/CreateProfessor';
import ListProfessor from '../professors/ListProfessor';
import CreateStudent from '../students/CreateStudent'
import EditStudent from '../students/EditStudent';
import ListStudent from '../students/ListStudent';
import EditProfessor from '../professors/EditProfessor';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='createStudent' element={<CreateStudent />} />
      <Route path='listStudent' element={<ListStudent />} />
      <Route path='editStudent/:id' element={<EditStudent />} />
      <Route path='createProfessor' element={<CreateProfessor />} />
      <Route path='listProfessor' element={<ListProfessor />} />
      <Route path='editProfessor/:id' element={<EditProfessor />} ></Route>
    </Routes>
  )
}

export default MainRoutes