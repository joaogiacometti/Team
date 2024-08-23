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