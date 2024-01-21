import 'react-router-dom'
import './App.css'
import { BrowserRouter, Route, Routes, json } from 'react-router-dom'
import LoginP from './pages/LoginP'
import AdminP from './pages/AdminP'
import AddProuductsP from './pages/AddProuductsP'
import { useState } from 'react'
import ProfileP from './pages/ProfileP'

function App() {
  let [x,setX]=useState('')
 let localValue=JSON.parse(localStorage.getItem('login'))
  return (
    <BrowserRouter>
      {
        localValue?<Routes>
          <Route path='/' element={<AdminP x={x} setX={setX}/>}/>
          <Route path='/add' element={<AddProuductsP x={x} setX={setX}/>}/>
          <Route path='/profile' element={<ProfileP localValue={localValue}/>}/>
        </Routes>:<LoginP/>
      }
      
    </BrowserRouter>
  )
}

export default App
