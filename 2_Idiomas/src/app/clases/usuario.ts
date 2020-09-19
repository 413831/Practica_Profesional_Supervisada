
export class Usuario
{
    id: string;
    email: string;
    pass: string;

    public static CrearUsuario(id: string,email: string) : Usuario
    {
        let usuario = new Usuario();
        usuario.id = id;
        usuario.email = email;

        return usuario;
    } 
}