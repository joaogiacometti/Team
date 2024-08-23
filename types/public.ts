export type TeamType = {
    id: string;
    name: string;
    description: string;
    owner: string;
}

export type TeamInsertType = Omit<
    TeamType,
    "id"
>

export type Profile = {
    id: string;
    email: string;
    avatar_url: string;
}