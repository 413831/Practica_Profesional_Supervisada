export class Imagen
{
    id: string;
    url: string;
    base64: string;
    usuario: string;
    nombreUsuario: string;
    fecha: Date;
    tipo: TipoImagen;
    votos: string[];

    public Imagen()
    {
        this.votos = [];
    }

    public static CrearImagen(id: string, base64: string, url: string, usuario: string, 
                            nombreUsuario: string,fecha: Date, tipo: TipoImagen, votos: string[])
    {
        const imagen = new Imagen();

        imagen.id = id;
        imagen.base64 = base64;
        imagen.url = url;
        imagen.usuario = usuario;
        imagen.nombreUsuario = nombreUsuario;
        imagen.fecha = fecha;
        imagen.tipo = tipo;
        imagen.votos.push(...votos);

        return imagen;
    }
}

export enum TipoImagen
{
    POSITIVA = 'positiva',
    NEGATIVA = 'negativa'
}