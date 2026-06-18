export type BloqueHorario = {
  salon: string;
  dia: string;
  inicio: string;
  fin: string;
  curso: string;
  docente: string;
  tipo: string;
};

const SHEET_ID =
  "1tUWKmZqMVVuZdpwMFSPSZ-ehunrNm-VTqaYHlvQ0OUY";

export async function obtenerHorarios() {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const csv = await res.text();

  const filas = csv
    .split("\n")
    .map((fila) => fila.trim())
    .filter(Boolean);

  const datos = filas.slice(1);

  return datos.map((fila) => {
    const columnas = fila.split(",");

    return {
      salon: columnas[0]?.trim() ?? "",
      dia: columnas[1]?.trim().toLowerCase() ?? "",
      inicio: columnas[2]?.trim() ?? "",
      fin: columnas[3]?.trim() ?? "",
      curso: columnas[4]?.trim() ?? "",
      docente: columnas[5]?.trim() ?? "",
      tipo: columnas[6]?.trim().toLowerCase() ?? "",
    };
  });
}

export async function obtenerHorarioSalon(
  salon: string
) {
  const horarios =
    await obtenerHorarios();

  return horarios.filter(
    (h) =>
      h.salon.toLowerCase() ===
      salon.toLowerCase()
  );
}