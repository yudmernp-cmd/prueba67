import { obtenerHorarioSalon } from "@/lib/googleSheets";
import RegistroDocente from "@/components/registrodocente";

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

  const horarioSalon = await obtenerHorarioSalon(id.toUpperCase());

  if (horarioSalon.length === 0) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-8">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              SALÓN NO ENCONTRADO
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight">
              {id.toUpperCase()}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              El salón <span className="font-semibold text-white">{id}</span>{" "}
              no existe en el sistema.
            </p>

            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-left">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Sugerencia
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Verifica que el ID del salón coincida con el Google Sheets.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const ahora = new Date();

  const diaKey = sp.dia ? normalizarTexto(sp.dia) : obtenerDiaPeru(ahora);

  const horaActual = sp.hora ?? obtenerHoraPeru(ahora);

  const bloques = horarioSalon
    .filter((b) => normalizarTexto(b.dia) === diaKey)
    .map((b) => ({
      inicio: b.inicio,
      fin: b.fin,
      titulo: b.curso,
      profesor: b.docente,
      tipo: b.tipo,
    }));

  const minutosActuales = horaAMinutos(horaActual);

  const bloqueActual = bloques.find((bloque) => {
    const inicio = horaAMinutos(bloque.inicio);
    const fin = horaAMinutos(bloque.fin);

    return minutosActuales >= inicio && minutosActuales < fin;
  });

  const indiceActual = bloques.findIndex((bloque) => {
    const inicio = horaAMinutos(bloque.inicio);
    const fin = horaAMinutos(bloque.fin);

    return minutosActuales >= inicio && minutosActuales < fin;
  });

  const siguienteBloque = indiceActual >= 0 ? bloques[indiceActual + 1] : null;

  const diaMostrado = diaKey.charAt(0).toUpperCase() + diaKey.slice(1);

  const colorEstado =
    bloqueActual?.tipo === "clase"
      ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
      : bloqueActual?.tipo === "receso"
      ? "border-amber-400/20 bg-amber-500/10 text-amber-300"
      : bloqueActual?.tipo === "almuerzo"
      ? "border-orange-400/20 bg-orange-500/10 text-orange-300"
      : "border-sky-400/20 bg-sky-500/10 text-sky-300";

  const textoEstado =
    bloqueActual?.tipo === "clase"
      ? "CLASE"
      : bloqueActual?.tipo === "receso"
      ? "RECESO"
      : bloqueActual?.tipo === "almuerzo"
      ? "ALMUERZO"
      : "AUTOESTUDIO";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-8">
        <div className="w-full space-y-5">
          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.24em] text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  COAR
                </div>

                <h1 className="mt-5 text-5xl font-black leading-none tracking-tight">
                  {id.toUpperCase()}
                </h1>

                <p className="mt-3 text-sm text-slate-300">{diaMostrado}</p>
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 px-4 py-3 text-right shadow-lg shadow-black/10">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Hora actual
                </p>
                <p className="mt-1 text-2xl font-bold text-white">{horaActual}</p>
              </div>
            </div>

            {bloqueActual && (
              <div
                className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${colorEstado}`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {textoEstado}
              </div>
            )}
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Actividad actual
            </p>

            {bloqueActual ? (
              <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8">
                <h2 className="text-3xl font-black tracking-tight text-white">
                  {bloqueActual.titulo}
                </h2>

                {bloqueActual.profesor && (
                  <p className="mt-3 text-lg text-slate-300">
                    {bloqueActual.profesor}
                  </p>
                )}

                <p className="mt-4 text-sm text-slate-400">
                  {bloqueActual.inicio} - {bloqueActual.fin}
                </p>

                {bloqueActual && bloqueActual.profesor && (
                  <div className="mt-6">
                    <RegistroDocente
                      salon={id.toUpperCase()}
                      curso={bloqueActual.titulo}
                      docente={bloqueActual.profesor}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <h2 className="text-2xl font-black tracking-tight text-white">
                  No hay actividad programada
                </h2>

                <p className="mt-3 text-sm text-slate-300">
                  Fuera del horario escolar
                </p>
              </div>
            )}
          </section>

          {siguienteBloque && (
            <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Próxima actividad
              </p>

              <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900">
                <h3 className="text-xl font-bold text-white">
                  {siguienteBloque.titulo}
                </h3>

                {siguienteBloque.profesor && (
                  <p className="mt-2 text-sm text-slate-300">
                    {siguienteBloque.profesor}
                  </p>
                )}

                <p className="mt-3 text-sm text-slate-400">
                  {siguienteBloque.inicio} - {siguienteBloque.fin}
                </p>
              </div>
            </section>
          )}

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Horario de hoy
              </p>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300">
                {bloques.length} bloques
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {bloques.map((bloque, index) => {
                const activo =
                  bloqueActual?.inicio === bloque.inicio &&
                  bloqueActual?.fin === bloque.fin;

                return (
                  <div
                    key={index}
                    className={`group flex items-start gap-4 rounded-[1.3rem] border p-4 transition-all duration-300 hover:-translate-y-1 ${
                      activo
                        ? "border-emerald-400/30 bg-emerald-500/10"
                        : "border-white/10 bg-slate-900/60 hover:bg-slate-900"
                    }`}
                  >
                    <div
                      className={`mt-1 h-3 w-3 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-110 ${
                        activo ? "bg-emerald-400" : "bg-slate-500"
                      }`}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-white">
                          {bloque.inicio} - {bloque.fin}
                        </div>

                        {activo && (
                          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            Ahora
                          </span>
                        )}
                      </div>

                      <div className="mt-2 text-sm leading-relaxed text-slate-300">
                        {bloque.titulo}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="text-center text-xs tracking-[0.2em] text-slate-400">
            Sistema de información mediante QR
          </div>
        </div>
      </div>
    </main>
  );
}