export interface Evento {
    id: number;
    titulo: string;
    descripcion: string | null;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    notificar: boolean;
    minutos_previos_notificacion: number;
    created_at: string;
    updated_at: string;
}
