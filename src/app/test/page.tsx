export default async function TestPage() {
  const SHEET_ID =
    "1tUWKmZqMVVuZdpwMFSPSZ-ehunrNm-VTqaYHlvQ0OUY";

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const texto = await res.text();

  return (
    <main className="p-8">
      <pre>{texto}</pre>
    </main>
  );
}