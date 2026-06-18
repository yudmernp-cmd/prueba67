import QrScanner from "@/components/QrScanner";

export default function ScannerPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">

        <h1 className="text-3xl font-bold text-center">
          Escanear QR
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Apunta la cámara al QR del salón.
        </p>

        <div className="mt-6">
          <QrScanner />
        </div>

      </div>
    </main>
  );
}