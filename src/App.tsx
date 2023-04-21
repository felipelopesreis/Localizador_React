import { FormEvent, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline, TextField, Button, Grid, Box, CircularProgress, Card, CardContent, Avatar, Typography } from '@mui/material'
import { Base } from './Layout'
import { Theme } from './Layout/ThemeProvider'
import { PaginaPerfis } from './Paginas/PaginaPerfis'


import { getUser } from './Services/api'
import { QueryClient, QueryClientProvider } from 'react-query'

type User={
  avatarURL: string,
  htmlURL: string,
  name: string,
  followers: string, 
  following: string

}



const initialUser:User = {
  avatarURL: "",
  htmlURL: "",
  name: "",
  followers: "", 
  following: ""
}
function App() {


  const {} = useQuery({
    queryKey: "user-github",
    queryFn:getUser
  })


  const [user, setUser] = useState<user>({avatar_url:"",html_url:""});

  const handleSubmit = (event:FormEvent<HTMLFormElement)=>{
    event.preventDefault()
    const form = event.currentTarget
    const inputUserName:HTMLInputElement = form.userName
  };
  useEffect(()=>, [])

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

  <Grid item lg={6} sm={12} xs={12}>
  <Box display='flex'>
    <form onSubmit={handleSubmit}>
      <TextField label='Nome do perfil' fullWidth name="userName"/>
      <Button variant='contained' type='submit'>Buscar</Button>
      
     </form>   
  </Box>
  </Grid>
  <Grid item lg={6} sm={12} xs={12}>
  {isLoading ?(
  <CircularProgress/>
  ):(
      <Card>
        <CardContent>
          <Avatar src={user.avatar_url}/>
          <Typography variant='h4'>
            {user.name}
          </Typography>
        </CardContent>
      </Card>

  )}
  </Grid>
  </>
  
 )
}

export default App
