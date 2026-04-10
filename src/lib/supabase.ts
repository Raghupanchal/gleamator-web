import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseUrl.startsWith("http")) {
  throw new Error(
    "Invalid supabaseUrl: Set VITE_SUPABASE_URL to a valid HTTP or HTTPS URL in .env"
  );
}

if (!supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY: add it to .env and restart the dev server.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

