import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ListStudentComponent from './components/ListStudentComponent';
import LoginStudentComponent from './components/LoginStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginStudentComponent/>}></Route>
    <Route path='/listStudents' element={<ListStudentComponent/>}></Route>
    <Route path='/addUpdateStudent' element={<AddStudentComponent/>}></Route>
    <Route path='/editStudent/:id' element={<AddStudentComponent/>}></Route>
    </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
