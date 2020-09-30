export class Imagen
{
    id: string;
    url: string;
    usuario: string;
    nombreUsuario: string;
    fecha: Date;
    tipo: TipoImagen;
}

export enum TipoImagen
{
    POSITIVA = 'positiva',
    NEGATIVA = 'negativa'
}