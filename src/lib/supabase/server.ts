import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database";
import { requireSupabaseServerEnv } from "@/lib/supabase/env";

let adminClient: ReturnType<typeof createClient<Database>> | null = null;

export function createAdminSupabaseClient() {
  if (adminClient) {
    return adminClient;
  }

  const { url, serviceRoleKey } = requireSupabaseServerEnv();

  adminClient = createClient<Database>(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return adminClient;
}
