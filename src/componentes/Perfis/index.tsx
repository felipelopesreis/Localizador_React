   import {ListItem, ListItemText, ListarPerfil, Typography } from "@mui/material"
   
   type: PerfisProps{
    avatarURL:String, 
    name:String

   }
   export function Perfis(){
          <ListarPerfil>
        
          <ListItem>
            <img src={avatarURL}/>
          
            <ListItemText primary={<Typography>{name}</Typography>}>
            </ListItemText>

             
            </ListItem>
           
            </ListarPerfil>
}