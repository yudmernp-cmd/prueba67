"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";

export default function QrScanner() {
  const router = useRouter();

  useEffect(() => {
    let qrCode: Html5Qrcode | null = null;
    let isMounted = true;

    const iniciarScanner = async () => {
      try {
        qrCode = new Html5Qrcode("reader");

        await qrCode.start(
          {
            facingMode: "environment",
          },
          {
            fps: 10,
            qrbox: {
              width: 280,
              height: 280,
            },
          },
          async (decodedText) => {
            if (!isMounted) return;

            try {
              await qrCode?.stop();

              const url = new URL(decodedText);

              if (url.pathname.startsWith("/salon/")) {
                router.replace(url.pathname);
              } else {
                window.location.href = decodedText;
              }
            } catch {
              console.error("QR inválido");
            }
          },
          () => {}
        );
      } catch (error) {
        console.error(
          "No se pudo iniciar la cámara:",
          error
        );
      }
    };

    iniciarScanner();

    return () => {
      isMounted = false;

      if (qrCode?.isScanning) {
        qrCode
          .stop()
          .then(() => qrCode?.clear())
          .catch(() => {});
      }
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                COAR
              </p>

              <h1 className="mt-1 text-lg font-bold text-white">
                Escáner QR
              </h1>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Activo
            </div>

          </div>

          <div className="relative">

            <div id="reader" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

              <div className="relative h-72 w-72">

                <div className="absolute inset-0 rounded-3xl border border-white/20" />

                <div className="absolute left-0 top-0 h-10 w-10 border-l-4 border-t-4 border-emerald-400 rounded-tl-xl" />

                <div className="absolute right-0 top-0 h-10 w-10 border-r-4 border-t-4 border-emerald-400 rounded-tr-xl" />

                <div className="absolute bottom-0 left-0 h-10 w-10 border-b-4 border-l-4 border-emerald-400 rounded-bl-xl" />

                <div className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-emerald-400 rounded-br-xl" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}