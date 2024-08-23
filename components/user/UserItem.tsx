"use client";

import { getProfile } from "@/actions/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Profile } from "@/types/public";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const UserItem = () => {
  const [user, setUser] = useState<Profile | null>(null);

  async function fetchUser() {
    const response = await getProfile();
    if (response) {
      setUser(response);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex gap-2 border rounded-xl p-2 items-center">
      <div className="mr-2">
        {user ? (
          <Avatar>
            <AvatarImage src={`${user?.avatar_url}`} />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[180px]" />
            </div>
          </div>
        )}
      </div>
      <div className="flex text-center justify-center">
        <p className="text-[13px] font-bold">{user?.email}</p>
      </div>
    </div>
  );
};
