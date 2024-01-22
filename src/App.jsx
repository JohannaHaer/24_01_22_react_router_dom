
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Speisekarte from './pages/speisekarte/Speisekarte'
import Kontakt from './pages/kontakt/Kontakt'
import Oeffnungszeiten from './pages/oeffnungszeiten/Oeffnungszeiten'
import Gallerie from './pages/gallerie/Gallerie'
import { useState } from 'react'

function App() {

  // const location = useLocation()
  // console.log(location);

  // const [bG, setBG] = useState("white")

  // const NavBG = window.location.pathname === '/' ? setBG("black") : null

  return (
    <>
      <Routes>
        <Route path='/' element={<Speisekarte/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='/oeffnungszeiten' element={<Oeffnungszeiten/>}/>
        <Route path='/gallerie' element={<Gallerie/>}/>
      </Routes>
    </>
  )
}

export default App
