export class Usuario
{
    id: string;
    nombre: string;
    dni: string;
    domicilio: string;
    telefono: number;
    email: string;
    pass: string;
    rol: string;
    credito: number;

    public Usuario()
    {
        this.rol = "Usuario";
        this.credito = 0;
    }

    public static CrearUsuario(id: string, nombre:string, dni:string, domicilio: string,
                            telefono: number, email: string, credito: number ,rol:string) : Usuario
    {
        let usuario = new Usuario();
        usuario.id = id;
        usuario.nombre = nombre;
        usuario.dni = dni;
        usuario.domicilio = domicilio;
        usuario.telefono = telefono;
        usuario.email = email;
        usuario.credito = credito;
        usuario.rol = rol;

        return usuario;
    }   
}