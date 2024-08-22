"use client";

import { getAllTeams } from "@/actions/user-teams";
import { TeamType } from "@/types/public";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const TeamList = () => {
  const [teams, setTeams] = useState<TeamType[] | null>();

  async function fetchAllTeams() {
    const response = await getAllTeams();

    if (response) {
      setTeams(response);
    }
  }

  useEffect(() => {
    fetchAllTeams();
  }, []);

  return (
    <>
      {teams?.map((team) => (
        <Card className="w-[350px]" key={team.id}>
          <CardHeader>
            <CardTitle>{team.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {team.description && (
              <CardDescription>{team.description}</CardDescription>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="w-full">
              <Link href={`/teams/${team.id}`}>View</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
