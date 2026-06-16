import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-slate-900 text-white p-8 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-slate-300">
              Sistema QR
            </p>

            <h1 className="text-4xl font-bold mt-3">
              COAR
            </h1>

            <p className="mt-3 text-slate-300">
              Información de aulas mediante código QR
            </p>

          </div>

          <div className="p-6 space-y-4">

            <button
              className="w-full rounded-2xl bg-slate-900 text-white py-4 text-lg font-semibold hover:bg-slate-800 transition"
            >
              📷 Escanear QR
            </button>

            <div className="border-t pt-4">
              <p className="text-sm text-slate-500 mb-3">
                Pruebas rápidas
              </p>

              <Link
                href="/salon/3A"
                className="block w-full rounded-xl border p-4 hover:bg-slate-50"
              >
                Salón 3A
              </Link>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}