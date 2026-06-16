export type TipoBloque =
  | "clase"
  | "receso"
  | "almuerzo"
  | "asesoria"
  | "autoestudio";

export type BloqueHorario = {
  inicio: string;
  fin: string;
  titulo: string;
  profesor: string;
  tipo: TipoBloque;
};

export const horario3A: Record<string, BloqueHorario[]> = {
  lunes: [
    { inicio: "07:50", fin: "08:30", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "08:30", fin: "09:10", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "09:10", fin: "09:50", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "09:50", fin: "10:30", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "10:30", fin: "10:50", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "10:50", fin: "11:30", titulo: "CyT (Química)", profesor: "CRISTIAM BALDEÓN", tipo: "clase" },
    { inicio: "11:30", fin: "12:10", titulo: "EDUCACIÓN FÍSICA", profesor: "ANA RAMÍREZ", tipo: "clase" },
    { inicio: "12:10", fin: "12:50", titulo: "EDUCACIÓN FÍSICA", profesor: "ANA RAMÍREZ", tipo: "clase" },
    { inicio: "12:50", fin: "13:50", titulo: "ALMUERZO", profesor: "", tipo: "almuerzo" },
    { inicio: "13:50", fin: "14:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "14:30", fin: "15:10", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "15:10", fin: "15:50", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "15:50", fin: "16:10", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "16:10", fin: "16:50", titulo: "TUTORÍA", profesor: "JAVIER SILVA / STEPHANIE CHALLCO", tipo: "clase" },
    { inicio: "16:50", fin: "17:30", titulo: "TUTORÍA", profesor: "JAVIER SILVA / STEPHANIE CHALLCO", tipo: "clase" },
    { inicio: "17:30", fin: "18:10", titulo: "TALLER INGLÉS 3ERO", profesor: "DAVID MORALES / TRANK TRAVEZANO / DORILA MALLQUI / DOCENTE NUEVO DE INGLÉS", tipo: "clase" },
    { inicio: "18:10", fin: "18:50", titulo: "TALLER INGLÉS 3ERO", profesor: "DAVID MORALES / TRANK TRAVEZANO / DORILA MALLQUI / DOCENTE NUEVO DE INGLÉS", tipo: "clase" },
  ],

  martes: [
    { inicio: "07:50", fin: "08:30", titulo: "CyT (Biología)", profesor: "HELI LEIVA", tipo: "clase" },
    { inicio: "08:30", fin: "09:10", titulo: "CyT (Biología)", profesor: "HELI LEIVA", tipo: "clase" },
    { inicio: "09:10", fin: "09:50", titulo: "CyT (física)", profesor: "SANTIAGO CLUSMAN", tipo: "clase" },
    { inicio: "09:50", fin: "10:30", titulo: "CyT (física)", profesor: "SANTIAGO CLUSMAN", tipo: "clase" },
    { inicio: "10:30", fin: "10:50", titulo: "RECESO", profesor: "", tipo: "receso" as any },
    { inicio: "10:50", fin: "11:30", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "11:30", fin: "12:10", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "12:10", fin: "12:50", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "12:50", fin: "13:50", titulo: "ALMUERZO", profesor: "", tipo: "almuerzo" },
    { inicio: "13:50", fin: "14:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "14:30", fin: "15:10", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "15:10", fin: "15:50", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "15:50", fin: "16:10", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "16:10", fin: "16:50", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "16:50", fin: "17:30", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "17:30", fin: "18:10", titulo: "TALLER 3ERO", profesor: "JAVIER SILVA / FREDDY CAÑOLI", tipo: "clase" },
    { inicio: "18:10", fin: "18:50", titulo: "TALLER 3ERO", profesor: "JAVIER SILVA / FREDDY CAÑOLI", tipo: "clase" },
  ],

  miercoles: [
    { inicio: "07:50", fin: "08:30", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "08:30", fin: "09:10", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "09:10", fin: "09:50", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "09:50", fin: "10:30", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "10:30", fin: "10:50", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "10:50", fin: "11:30", titulo: "TEMP", profesor: "FREDDY CAÑOLI", tipo: "clase" },
    { inicio: "11:30", fin: "12:10", titulo: "TEMP", profesor: "FREDDY CAÑOLI", tipo: "clase" },
    { inicio: "12:10", fin: "12:50", titulo: "TEMP", profesor: "FREDDY CAÑOLI", tipo: "clase" },
    { inicio: "12:50", fin: "13:50", titulo: "ALMUERZO", profesor: "", tipo: "almuerzo" },
    { inicio: "13:50", fin: "14:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "14:30", fin: "15:10", titulo: "CyT (Biología)", profesor: "HELI LEIVA", tipo: "clase" },
    { inicio: "15:10", fin: "15:50", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "15:50", fin: "16:10", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "16:10", fin: "16:50", titulo: "CIENCIAS SOCIALES", profesor: "MANUEL SOLSOL", tipo: "clase" },
    { inicio: "16:50", fin: "17:30", titulo: "ARTE Y CULTURA", profesor: "CRISTIAN MAZA", tipo: "clase" },
    { inicio: "17:30", fin: "18:10", titulo: "ARTE Y CULTURA", profesor: "CRISTIAN MAZA", tipo: "clase" },
    { inicio: "18:10", fin: "18:50", titulo: "ARTE Y CULTURA", profesor: "CRISTIAN MAZA", tipo: "clase" },
  ],

  jueves: [
    { inicio: "07:50", fin: "08:30", titulo: "HABILIDADES INVESTIGATIVAS", profesor: "CRISTIAM BALDEÓN", tipo: "clase" },
    { inicio: "08:30", fin: "09:10", titulo: "HABILIDADES INVESTIGATIVAS", profesor: "CRISTIAM BALDEÓN", tipo: "clase" },
    { inicio: "09:10", fin: "09:50", titulo: "DPCC", profesor: "GYNA BARDÓN", tipo: "clase" },
    { inicio: "09:50", fin: "10:30", titulo: "DPCC", profesor: "GYNA BARDÓN", tipo: "clase" },
    { inicio: "10:30", fin: "10:50", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "10:50", fin: "11:30", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "11:30", fin: "12:10", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "12:10", fin: "12:50", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "12:50", fin: "13:50", titulo: "ALMUERZO", profesor: "", tipo: "almuerzo" },
    { inicio: "13:50", fin: "14:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "14:30", fin: "15:10", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "15:10", fin: "15:50", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "15:50", fin: "16:10", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "16:10", fin: "16:50", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "16:50", fin: "17:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "17:30", fin: "18:10", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "18:10", fin: "18:50", titulo: "CyT (física)", profesor: "SANTIAGO CLUSMAN", tipo: "clase" },
  ],

  viernes: [
    { inicio: "07:50", fin: "08:30", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "08:30", fin: "09:10", titulo: "MATEMÁTICA", profesor: "NILTON ÁNGELES", tipo: "clase" },
    { inicio: "09:10", fin: "09:50", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "09:50", fin: "10:30", titulo: "INGLÉS", profesor: "DORILA MALLQUI", tipo: "clase" },
    { inicio: "10:30", fin: "10:50", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "10:50", fin: "11:30", titulo: "CyT (Química)", profesor: "CRISTIAM BALDEÓN", tipo: "clase" },
    { inicio: "11:30", fin: "12:10", titulo: "CyT (Química)", profesor: "CRISTIAM BALDEÓN", tipo: "clase" },
    { inicio: "12:10", fin: "12:50", titulo: "DPCC", profesor: "GYNA BARDÓN", tipo: "clase" },
    { inicio: "12:50", fin: "13:50", titulo: "ALMUERZO", profesor: "", tipo: "almuerzo" },
    { inicio: "13:50", fin: "14:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "14:30", fin: "15:10", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "15:10", fin: "15:50", titulo: "COMUNICACIÓN", profesor: "VERÓNICA RODRÍGUEZ", tipo: "clase" },
    { inicio: "15:50", fin: "16:10", titulo: "RECESO", profesor: "", tipo: "receso" },
    { inicio: "16:10", fin: "16:50", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "16:50", fin: "17:30", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "17:30", fin: "18:10", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
    { inicio: "18:10", fin: "18:50", titulo: "ASESORÍA ACADÉMICA", profesor: "AUTOESTUDIO", tipo: "autoestudio" },
  ],
};