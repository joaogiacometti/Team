import AuthHeader from "../components/header/HomeHeader";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return <>{isSupabaseConnected && <AuthHeader />}</>;
}
