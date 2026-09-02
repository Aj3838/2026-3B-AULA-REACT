import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {Routes, Route, link, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App(){
  return(
    <div>
<nav>
  <Link to='/'>Home</Link>
  <Link to='/sobre'>Sobre</Link>
</nav>
<hr/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sobre' element={<Sobre/>}/>
</Routes>
    </div>
  )
}

export default App