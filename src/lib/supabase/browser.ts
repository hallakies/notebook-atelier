import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database";
import { requireSupabaseBrowserEnv } from "@/lib/supabase/env";

export function createBrowserSupabaseClient() {
  const { url, publishableKey } = requireSupabaseBrowserEnv();

  return createClient<Database>(url, publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
