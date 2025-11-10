import { useState } from 'react'
import Header  from './components/header/Header'
import Footer  from './components/footer/Footer'
import Carrossel from './components/carrossel/Carrossel'
import Filtro from './components/filtro/Filtro'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Filtro />


      <Carrossel></Carrossel>
      <Footer /> 
    </>
  )
}

export default App
