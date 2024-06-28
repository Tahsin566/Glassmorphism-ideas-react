import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './paths/About'
import Home from './paths/Home'
import Contact from './paths/Contact'
import Details from './paths/Details'


function App() {

  return (
    <>
      <Routes>

        <Route path='/' Component={Home}/>
        <Route path='/about/' Component={About}/>
        <Route path='/contact/:id' Component={Contact}/>
        <Route path='/details' Component={Details}/>

      </Routes>

    </>
  )
}

export default App
