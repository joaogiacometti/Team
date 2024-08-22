export type UserTeamsType = {
    user_id: string;
    team_id: string;
}

export type TeamType = {
    id: string;
    name: string;
    description: string;
    owner?: string;
}