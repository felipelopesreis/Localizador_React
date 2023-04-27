import { FormEvent, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline, TextField, Button, Grid, Box, CircularProgress, Card, CardContent, Avatar, Typography } from '@mui/material'
import { Base } from './Layout'
import { Theme } from './Layout/ThemeProvider'
import { PaginaPerfis } from './Paginas/PaginaPerfis'


import { getUser } from './Services/api'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

type User={
  avatarURL: string,
  htmlURL: string,
  name: string,
  followers: string,
  bio: string, 
  following: string

}



const initialUser:User = {
  avatarURL: "",
  htmlURL: "",
  name: "",
  followers: "", 
  bio: "",
  following: ""
}
function App() {


 

  const [user, setUser] = useState<User>({avatar_url:"",html_url:"",name:"",followers:"",bio:"",following:""});

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
          <Avatar src={user.avatarURL}/>
          <Avatar src={user.htmlURL}/>
          <Avatar src={user.name}/>
          <Avatar src={user.followers}/>
          <Avatar src={user.bio}/>
          <Avatar src={user.following}/>
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
