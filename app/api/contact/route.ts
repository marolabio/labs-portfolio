import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return new Response(
      JSON.stringify({ ok: false, error: "Please fill in all fields." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  // Baseline behavior: log to server. In a real project you can
  // integrate an email provider or CRM here.
  console.log("[contact] New message", { name, email, message });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

