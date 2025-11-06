// Simple in-memory rate limiter (for serverless, consider external cache like Upstash)
const requests = new Map<string, { count: number; last: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30; // per minute per user/IP

export function rateLimit(key: string) {
  const now = Date.now();
  const record = requests.get(key);

  if (!record || now - record.last > WINDOW_MS) {
    requests.set(key, { count: 1, last: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  requests.set(key, record);
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

/**
 * Helper for API routes
 */
export async function enforceRateLimit(req: Request, userId?: string) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const key = userId ? `${userId}` : `${ip}`;
  const result = rateLimit(key);

  if (!result.allowed) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return null;
}
