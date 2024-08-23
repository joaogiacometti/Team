"use server";

import { TeamInsertType, TeamType } from "@/types/public";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/actions/auth";
import { revalidatePath } from "next/cache";

const supabase = createClient();

export async function getAllTeams(): Promise<TeamType[] | null> {
  const user = await getUser();

  const { data: teamsWrapper, error } = await supabase
    .from("UserTeams")
    .select(
      `
        Team(
            id,
            name,
            description,
            owner
        )`
    )
    .eq("user_id", user!.id);

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

export async function create(params: TeamInsertType) {
  const { error } = await supabase
  .from('Team')
  .insert([
    { name: params.name, description: params.description, owner: params.owner },
  ])
  .select()

  if(error) {
    console.log("Error creating team:", error);
  }

  revalidatePath("/teams");
} 
