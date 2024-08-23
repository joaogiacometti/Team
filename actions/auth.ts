"use server";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function getUser(){
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError || !data?.user) {
      console.log(userError || "No user logged in");
      return null;
    }

    return data.user;
}