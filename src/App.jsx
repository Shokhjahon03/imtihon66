import 'react-router-dom'
import './App.css'
import { BrowserRouter, Route, Routes, json } from 'react-router-dom'
import LoginP from './pages/LoginP'
import AdminP from './pages/AdminP'
import AddProuductsP from './pages/AddProuductsP'

function App() {
 let localValue=JSON.parse(localStorage.getItem('login'))
  return (
    <BrowserRouter>
      {
        localValue?<Routes>
          <Route path='/' element={<AdminP/>}/>
          <Route path='/add' element={<AddProuductsP/>}/>
        </Routes>:<LoginP/>
      }
      
    </BrowserRouter>
  )
}

export default App
