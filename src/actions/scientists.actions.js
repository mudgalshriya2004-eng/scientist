"use server";

import { createClient } from "@/utils/supabase/server";

export async function getScientists(era, search = "") {
  const supabase = createClient();

  let query = supabase
    .from("scientists")
    .select("*")
    .order("name");

  if (era) query = query.eq("era", era);
  if (search) query = query.ilike("name", `%${search}%`);

  const { data } = await query;
  return data || [];
}
