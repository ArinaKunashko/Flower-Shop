import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container maxWidth="sm">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
