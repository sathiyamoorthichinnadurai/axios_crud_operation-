import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Ubdate from './Ubdate'
import Create from './Create'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/update/:id' element={<Ubdate></Ubdate>}></Route>
        <Route path='/read/:id' element={<Read></Read>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
