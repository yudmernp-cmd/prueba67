import { horarios } from "@/lib/horarios";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    hora?: string;
    dia?: string;
  }>;
};

function normalizarTexto(texto: string) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function horaAMinutos(hora: string) {
  const [h, m] = hora.split(":").map(Number);
  return h * 60 + m;
}

function obtenerHoraPeru(date: Date) {
  return new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function obtenerDiaPeru(date: Date) {
  const dia = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    weekday: "long",
  }).format(date);

  return normalizarTexto(dia);
}

export default async function SalonPage({
  params,
  searchParams,
}: PageProps) {
  const { id } = await params;
  const sp = searchParams ? await searchParams : {};

  const horarioSalon =
    horarios[id.toUpperCase() as keyof typeof horarios];

  if (!horarioSalon) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div className="rounded-3xl bg-white p-8 shadow-xl text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Salón no encontrado
          </h1>

          <p className="mt-3 text-slate-600">
            El salón "{id}" no existe en el sistema.
          </p>
        </div>
      </main>
    );
  }

  const ahora = new Date();

  const diaKey = sp.dia
    ? normalizarTexto(sp.dia)
    : obtenerDiaPeru(ahora);

  const horaActual =
    sp.hora ?? obtenerHoraPeru(ahora);

  const bloques = horarioSalon[diaKey] ?? [];

  const minutosActuales =
    horaAMinutos(horaActual);

  const bloqueActual = bloques.find((bloque) => {
    const inicio = horaAMinutos(bloque.inicio);
    const fin = horaAMinutos(bloque.fin);

    return (
      minutosActuales >= inicio &&
      minutosActuales < fin
    );
  });

  const indiceActual = bloques.findIndex((bloque) => {
    const inicio = horaAMinutos(bloque.inicio);
    const fin = horaAMinutos(bloque.fin);

    return (
      minutosActuales >= inicio &&
      minutosActuales < fin
    );
  });

  const siguienteBloque =
    indiceActual >= 0
      ? bloques[indiceActual + 1]
      : null;

  const diaMostrado =
    diaKey.charAt(0).toUpperCase() +
    diaKey.slice(1);

  const colorEstado =
    bloqueActual?.tipo === "clase"
      ? "bg-green-100 text-green-700"
      : bloqueActual?.tipo === "receso"
      ? "bg-yellow-100 text-yellow-700"
      : bloqueActual?.tipo === "almuerzo"
      ? "bg-orange-100 text-orange-700"
      : "bg-blue-100 text-blue-700";

  const textoEstado =
    bloqueActual?.tipo === "clase"
      ? "🟢 CLASE"
      : bloqueActual?.tipo === "receso"
      ? "🟡 RECESO"
      : bloqueActual?.tipo === "almuerzo"
      ? "🟠 ALMUERZO"
      : "🔵 AUTOESTUDIO";

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center p-4">
      <div className="w-full max-w-md">

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <div className="bg-slate-900 p-6 text-center text-white">

            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
              COAR
            </p>

            <h1 className="mt-2 text-5xl font-bold">
              {id.toUpperCase()}
            </h1>

            <p className="mt-3 text-slate-300">
              {diaMostrado}
            </p>

            <p className="text-3xl font-semibold">
              {horaActual}
            </p>

          </div>

          <div className="p-6">

            {bloqueActual && (
              <div
                className={`mb-6 rounded-2xl p-3 text-center font-semibold ${colorEstado}`}
              >
                {textoEstado}
              </div>
            )}

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Actividad actual
            </p>

            {bloqueActual ? (
              <>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {bloqueActual.titulo}
                </h2>

                {bloqueActual.profesor && (
                  <p className="mt-2 text-lg text-slate-600">
                    {bloqueActual.profesor}
                  </p>
                )}

                <p className="mt-4 text-sm text-slate-500">
                  {bloqueActual.inicio} - {bloqueActual.fin}
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  No hay actividad programada
                </h2>

                <p className="mt-2 text-slate-500">
                  Fuera del horario escolar
                </p>
              </>
            )}

            {siguienteBloque && (
              <>
                <div className="my-6 border-t border-slate-200" />

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Próxima actividad
                </p>

                <div className="mt-3 rounded-2xl bg-slate-50 p-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {siguienteBloque.titulo}
                  </h3>

                  {siguienteBloque.profesor && (
                    <p className="mt-1 text-slate-600">
                      {siguienteBloque.profesor}
                    </p>
                  )}

                  <p className="mt-2 text-sm text-slate-500">
                    {siguienteBloque.inicio} - {siguienteBloque.fin}
                  </p>
                </div>
              </>
            )}

            <div className="my-6 border-t border-slate-200" />

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Horario de hoy
            </p>

            <div className="mt-3 space-y-2">
              {bloques.map((bloque, index) => {
                const activo =
                  bloqueActual?.inicio === bloque.inicio &&
                  bloqueActual?.fin === bloque.fin;

                return (
                  <div
                    key={index}
                    className={`rounded-xl p-3 ${
                      activo
                        ? "bg-green-100 border border-green-300"
                        : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm font-semibold">
                      {bloque.inicio} - {bloque.fin}
                    </div>

                    <div className="text-sm">
                      {bloque.titulo}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        <div className="mt-4 text-center text-sm text-slate-500">
          Sistema de información mediante QR
        </div>

      </div>
    </main>
  );
}