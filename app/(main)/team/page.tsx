import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Team() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>Team</h1>
    </div>
  );
}
