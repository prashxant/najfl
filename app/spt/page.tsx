// app/supabase-test/page.tsx
import { createClient } from "@/lib/supabase/server";

export default async function SupabaseTest() {
    const supabase = await createClient();
  const { data, error } = await supabase.from("auth.users").select("*");



  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
}
