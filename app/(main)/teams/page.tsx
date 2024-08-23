import { getAllTeams } from "@/actions/team";
import { CreateTeamDialog } from "@/components/teams/CreateTeamDialog";
import { TeamList } from "@/components/teams/TeamsList";

export default async function Team() {
  const teams = await getAllTeams();

  return (
    <section>
      <div className="pb-8">
        <CreateTeamDialog></CreateTeamDialog>
      </div>
      <TeamList teams={teams || []} />
    </section>
  );
}
