import { Equipo } from './equipo';

export enum EResultado
{
    GANADOR = 'ganador',
    PERDEDOR = 'perdedor'
}

export class Partido
{
    id: string;
    equipoA: Equipo;
    equipoB: Equipo;
    fecha: string;
    resultado: string;

    public static CrearPartido(id:string, equipoA: Equipo, equipoB: Equipo, fecha: string, resultado: string)
    {
        let partido = new Partido();

        partido.id = id;
        partido.equipoA = equipoA;
        partido.equipoB = equipoB;
        partido.fecha = fecha;
        partido.resultado = resultado;

        return partido;
    }
}
