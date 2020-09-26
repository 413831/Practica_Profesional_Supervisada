export class Imagen
{
    id: string;
    url: string;
    usuario: string;
    fecha: Date;
    tipo: TipoImagen;
}

export enum TipoImagen
{
    POSITIVA = 'positiva',
    NEGATIVA = 'negativa'
}