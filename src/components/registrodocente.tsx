"use client";

import { useState } from "react";

type Props = {
  salon: string;
  curso: string;
  docentes: string;
};

export default function RegistroDocente({
  salon,
  curso,
  docentes,
}: Props) {
  const listaDocentes = docentes
    .split("/")
    .map((d) => d.trim())
    .filter(Boolean);

  const [
    docenteSeleccionado,
    setDocenteSeleccionado,
  ] = useState("");

  const [estado, setEstado] =
    useState("");

  const [observacion, setObservacion] =
    useState("");

  const [guardando, setGuardando] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const [tipoMensaje, setTipoMensaje] =
    useState<
      "success" |
      "error" |
      ""
    >("");

  async function guardar() {

    if (!docenteSeleccionado) {

      setTipoMensaje("error");

      setMensaje(
        "Selecciona un docente."
      );

      return;
    }

    if (!estado) {

      setTipoMensaje("error");

      setMensaje(
        "Selecciona un estado."
      );

      return;
    }

    setGuardando(true);

    setMensaje("");

    try {

      const res =
        await fetch(
          "/api/registro",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              salon,
              curso,
              docente:
                docenteSeleccionado,
              estado,
              observacion,
            }),
          }
        );

      const data =
        await res.json();

      if (data.ok) {

        setTipoMensaje(
          "success"
        );

        setMensaje(
          "✓ Registro guardado correctamente."
        );

        setEstado("");
        setObservacion("");
        setDocenteSeleccionado("");

        setTimeout(() => {
          setMensaje("");
        }, 4000);

      } else {

        setTipoMensaje(
          "error"
        );

        setMensaje(
          "Error al guardar el registro."
        );

      }

    } catch (error) {

      console.error(error);

      setTipoMensaje(
        "error"
      );

      setMensaje(
        "Error al guardar el registro."
      );

    }

    setGuardando(false);
  }

  const opciones = [
    "Asistió",
    "Tardanza",
    "Ausente",
    "Permiso",
    "Reemplazo",
  ];

  return (
    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
        Registro docente
      </p>

      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">
        Docente
      </p>

      <div className="mt-3 flex flex-wrap gap-2">

        {listaDocentes.map(
          (docente) => (
            <button
              key={docente}
              type="button"
              onClick={() =>
                setDocenteSeleccionado(
                  docente
                )
              }
              className={`rounded-xl border px-3 py-2 text-sm transition-all duration-200 ${
                docenteSeleccionado ===
                docente
                  ? "border-cyan-400/30 bg-cyan-500/20 text-cyan-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {docente}
            </button>
          )
        )}

      </div>

      <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">
        Estado
      </p>

      <div className="mt-3 flex flex-wrap gap-2">

        {opciones.map(
          (opcion) => (
            <button
              key={opcion}
              type="button"
              onClick={() =>
                setEstado(
                  opcion
                )
              }
              className={`rounded-xl border px-3 py-2 text-sm transition-all duration-200 ${
                estado ===
                opcion
                  ? "border-blue-400/30 bg-blue-500/20 text-blue-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {opcion}
            </button>
          )
        )}

      </div>

      <textarea
        value={observacion}
        onChange={(e) =>
          setObservacion(
            e.target.value
          )
        }
        placeholder="Observación..."
        className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-white placeholder:text-slate-500 focus:border-blue-400/40 focus:outline-none"
      />

      <button
        onClick={guardar}
        disabled={guardando}
        className="mt-4 w-full rounded-2xl bg-white py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 active:scale-[0.98] disabled:opacity-50"
      >
        {guardando
          ? "Guardando..."
          : "Guardar registro"}
      </button>

      {mensaje && (
        <div
          className={`mt-4 rounded-2xl border p-3 text-sm font-medium ${
            tipoMensaje ===
            "success"
              ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
              : "border-red-400/20 bg-red-500/10 text-red-300"
          }`}
        >
          {mensaje}
        </div>
      )}

    </div>
  );
}