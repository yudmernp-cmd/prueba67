import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-8">
        <div className="w-full space-y-5">

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.24em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              SISTEMA QR COAR
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Control de aulas
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Consulta horarios en tiempo real, escanea códigos QR y registra
              asistencia docente desde una interfaz moderna y rápida.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                Horarios dinámicos
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                Registro docente
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                Google Sheets
              </span>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="space-y-4">

              <Link
                href="/scanner"
                className="group flex w-full items-center justify-between rounded-[1.4rem] bg-white px-5 py-4 text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white transition-transform duration-300 group-hover:scale-105">
                    📷
                  </div>

                  <div className="text-left">
                    <p className="text-base font-bold">
                      Escanear QR
                    </p>

                    <p className="text-sm text-slate-500">
                      Abrir horario del salón
                    </p>
                  </div>
                </div>

                <span className="text-xl text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-relaxed text-slate-300">
                  Escanea el código QR de la puerta para ver el curso actual,
                  identificar al docente y registrar cualquier incidencia en
                  segundos.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/8">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Estado
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                Sistema activo
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Rutas principales funcionando.
              </p>
            </div>

            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/8">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Salón
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                3A disponible
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Horario en Google Sheets.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Funcionalidades
            </p>

            <div className="space-y-3">
              <div className="group flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-lg">
                  🕒
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Horarios dinámicos
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    La información se sincroniza desde Google Sheets y cambia
                    según el día y la hora.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-slate-900">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg">
                  👨‍🏫
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Registro docente
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Permite marcar asistencia, tardanza, permiso o reemplazo
                    con observación.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-lg">
                  📱
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Acceso por QR
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Cada salón tendrá su QR físico para acceso directo desde
                    celular.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}