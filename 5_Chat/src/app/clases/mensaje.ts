import { Usuario } from './usuario';

export class Mensaje
{
    texto: string;
    usuario: string;
    nombreUsuario: string;
    fecha: string;
    sala: string;

    public static CrearMensaje(texto: string, usuario: string, aliasUsuario: string, fecha: string,
                                sala: string)
    {
        let mensaje = new Mensaje();

        mensaje.texto = texto;
        mensaje.usuario = usuario;
        mensaje.nombreUsuario = aliasUsuario;
        mensaje.fecha = fecha;
        mensaje.sala = sala;

        return mensaje;
    }   
}