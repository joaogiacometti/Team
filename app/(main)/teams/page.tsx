import { CreateTeamDialog } from "@/components/teams/CreateTeamDialog";
import { TeamList } from "@/components/teams/TeamsList";

export default async function Team() {
  return (
    <section>
      <div className="pb-8">
        <CreateTeamDialog></CreateTeamDialog>
      </div>
      <TeamList></TeamList>
    </section>
  );
}
