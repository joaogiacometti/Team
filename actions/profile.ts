"use server";

import { Profile } from "@/types/public";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "./auth";

const supabase = createClient();

export async function getProfile(): Promise<Profile | null> {
  const user = await getUser();

  let { data: Profile, error } = await supabase
    .from("Profile")
    .select("id, email, avatar_url")
    .eq("id", user!.id);

  if (Profile) {
    return Profile[0];
  }

  console.log("Error fetching profile:", error);
  return null;
}
