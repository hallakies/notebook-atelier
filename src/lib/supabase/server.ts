import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database";
import {
  getSupabasePublishableKey,
  getSupabaseUrl,
  requireSupabaseServerEnv,
} from "@/lib/supabase/env";

let adminClient: ReturnType<typeof createClient<Database>> | null = null;
let readOnlyClient: ReturnType<typeof createClient<Database>> | null = null;

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

export function createReadOnlySupabaseClient() {
  if (readOnlyClient) {
    return readOnlyClient;
  }

  readOnlyClient = createClient<Database>(
    getSupabaseUrl(),
    getSupabasePublishableKey(),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );

  return readOnlyClient;
}
