import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import { Base } from './Layout'
import { Theme } from './Layout/ThemeProvider'
import { PaginaPerfis } from './Paginas/PaginaPerfis'
import {useQuery} from '@tanstack/react-query'
import { getUser } from '../'
import { QueryClient, QueryClientProvider } from 'react-query'

type user={
  avatarURL: String,
  htmlURL: String,
  name: String
}
function App() {

  const [search, setSearch] = useState("")
  const inputRef = useRef
  const handleClick = ()=>{
    const username = inputRef.current
  }
  const {data, isLoading} = useQuery({
    queryKey: ["user-github"],
    queryFn: () =>{
      getUser(search)
    },  
  }) 

 return(
  <>
  <Theme>
  <CssBaseline/>
  <Base appBarTitle="Buscador de Perfis">
    <PaginaPerfis />
  </Base>
  </Theme>
  </>
 )
}

export default App
