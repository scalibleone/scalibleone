import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client
 * Uses service-role key for privileged operations (never expose to client)
 */
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

/**
 * Validate and return current user from request
 * Accepts Supabase session cookie or Authorization Bearer token
 */
export async function getUser(req: Request) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "") || null;

  if (!token) return null;

  const {
    data: { user },
    error,
  } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) return null;
  return user;
}

/**
 * Require authentication for protected routes.
 * Returns user if valid, otherwise 401 response.
 */
export async function requireAuth(req: Request) {
  const user = await getUser(req);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  return user;
}

/**
 * Simple role-check utility for admin-only endpoints.
 */
export function checkRole(user: any, role: string) {
  return user?.app_metadata?.role === role;
}


/**
 * Get user role (defaults to "user")
 */
export function getRole(user: any) {
  return user?.app_metadata?.role || "user";
}

/**
 * Require specific role(s) for a route.
 * Usage: const res = requireRole(user, ["admin"])
 */
export function requireRole(user: any, roles: string[]) {
  const role = getRole(user);
  if (!roles.includes(role)) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }
  return null;
}
