import logo from './logo.svg';
import './App.css';
import Addstud from './components/Addstud';

import Viewall from './components/Viewall';
import Searchstudent from './components/Searchstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Addstud/>}/>
    <Route path='/Searchstudent'element={<Searchstudent/>}/>
    <Route path='/Viewall'element={<Viewall/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
