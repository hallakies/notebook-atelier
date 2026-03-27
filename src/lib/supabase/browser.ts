import { createClient } from "@supabase/supabase-js";
import { requireSupabaseBrowserEnv } from "@/lib/supabase/env";

export function createBrowserSupabaseClient() {
  const { url, publishableKey } = requireSupabaseBrowserEnv();

  return createClient(url, publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
