import { Header } from "@/components/header/TeamsHeader";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex items-start justify-start">
      <div className="hidden md:flex min-w-[300px] border-r min-h-screen">
        <Sidebar></Sidebar>
      </div>
      <main className="grid w-full h-full">
        <Header></Header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
