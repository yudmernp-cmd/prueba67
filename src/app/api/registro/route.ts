import { APPS_SCRIPT_URL } from "@/lib/config";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();

    const ahora =
      new Date();

    const fecha =
      new Intl.DateTimeFormat(
        "es-PE",
        {
          timeZone:
            "America/Lima",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }
      ).format(ahora);

    const horaRegistro =
      new Intl.DateTimeFormat(
        "es-PE",
        {
          timeZone:
            "America/Lima",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      ).format(ahora);

    const payload = {
      fecha,
      horaRegistro,
      ...body,
    };

    const response =
      await fetch(
        APPS_SCRIPT_URL,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

    const texto =
      await response.text();

    console.log(
      "Apps Script:",
      texto
    );

    return Response.json({
      ok: true,
      respuesta: texto,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        ok: false,
      },
      {
        status: 500,
      }
    );

  }
}