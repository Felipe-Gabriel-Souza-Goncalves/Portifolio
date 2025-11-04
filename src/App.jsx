import { useState } from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Carrossel } from './components/carrossel/Carrossel'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div>
        <h1>Eu</h1>
      </div>
      <Carrossel></Carrossel>
      <Footer />
    </>
  )
}

export default App
