export class Usuario
{
    id: string;
    alias: string;
    division: string;
    telefono: number; 
    email: string;
    pass: string;
    rol: string;

    public Usuario()
    {
        this.rol = "Usuario";
    }


    public static CrearUsuario(id: string, alias: string, division: string,
                                email: string) : Usuario
    {
        let usuario = new Usuario();
        usuario.id = id;
        usuario.email = email;

        return usuario;
    }  
}
