import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Home } from './pages/Care'
import { Store } from './pages/Store'
import { About } from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#141614',
      },
      secondary: {
        main: '#004D40',
      },
    },
  })
  return (

    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </ThemeProvider>
  )
}

export default App
