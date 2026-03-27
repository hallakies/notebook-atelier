import {
  SUPABASE_PUBLIC_PUBLISHABLE_KEY,
  SUPABASE_PUBLIC_URL,
} from "@/lib/supabase/public-config";

function readEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? SUPABASE_PUBLIC_URL;
}

export function getSupabasePublishableKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    SUPABASE_PUBLIC_PUBLISHABLE_KEY
  );
}

export function getSupabaseServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
}

export function requireSupabaseBrowserEnv() {
  return {
    url: getSupabaseUrl(),
    publishableKey: getSupabasePublishableKey(),
  };
}

export function requireSupabaseServerEnv() {
  return {
    url: getSupabaseUrl(),
    serviceRoleKey: readEnv("SUPABASE_SERVICE_ROLE_KEY"),
  };
}
