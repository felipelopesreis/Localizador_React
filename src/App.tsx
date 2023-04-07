import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import { Base } from './Layout'
import { Theme } from './Layout/ThemeProvider'

function App() {
 return(
  <>
  <Theme>
  <CssBaseline/>
  <Base appBarTitle="Buscador de Perfis">

  </Base>
  </Theme>
  </>
 )
}

export default App
