import { requireAuth, requireRole } from "@/lib/server/auth";
import { logInfo } from "@/lib/server/logger";

/**
 * GET /api/admin/usage
 * Returns basic system usage (placeholder for Supabase metrics)
 */
export async function GET(req: Request) {
  const user = await requireAuth(req);
  if (user instanceof Response) return user;

  const roleCheck = requireRole(user, ["admin"]);
  if (roleCheck instanceof Response) return roleCheck;

  // Placeholder: here you would query Supabase for usage stats
  logInfo("Admin accessed usage endpoint", { admin: user.email });

  const sampleStats = {
    totalUsers: 124,
    activeSubscriptions: 58,
    aiRequestsToday: 420,
  };

  return new Response(JSON.stringify(sampleStats), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
