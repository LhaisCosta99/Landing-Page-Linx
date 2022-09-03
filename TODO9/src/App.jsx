import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'

function App() {
  return (
    <div id='root'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
