type ListagemPerfis ={
    children:React.ReactNode
}

export function ListarPerfil({children}:ListagemPerfis){
    return(
        <div>
            {children}
        </div>
    )
}