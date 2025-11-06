import { requireAuth } from "@/lib/server/auth";

export const runtime = "edge"; // use Vercel Edge Runtime for faster response

/**
 * POST /api/ai
 * Body: { model: string, messages: array, temperature?: number }
 * Auth: Bearer token from Supabase session
 */
export async function POST(req: Request) {
  // Verify authentication
  const user = await requireAuth(req);
  if (user instanceof Response) return user; // unauthorized

  try {
    const body = await req.json();
    const { model, messages, temperature = 0.7 } = body;

    if (!model || !messages) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Call OpenRouter securely from server
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        user: user.id, // trace usage per user
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: err }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();

    // optional: log usage to Supabase here later

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
