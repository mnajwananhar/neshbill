export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    console.log(data.get("file"));
  }
  return new Response("OK", { status: 200 });
}