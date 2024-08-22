"use server";

import { TeamType } from "@/types/public";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function getAllTeams(): Promise<TeamType[] | null> {
  const { data, error: userError } = await supabase.auth.getUser();

  if (userError || !data?.user) {
    console.log(userError || "No user logged in");
    return null;
  }

  const { data: teamsWrapper, error } = await supabase
    .from("UserTeams")
    .select(
      `
        Team(
            id,
            name,
            description
        )`
    )
    .eq("user_id", data.user.id);

  if (error) {
    console.log("Error fetching teams:", error);
    return null;
  }

  if (teamsWrapper) {
    const teamsList: TeamType[] = teamsWrapper.map((teamWrapper) => teamWrapper.Team).flat();
    return teamsList;
  }

  return null;
}
