"use client";

import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";
import { User, Users, Settings, ScrollText, Home } from "lucide-react";
import { UserItem } from "@/components/user/UserItem";
import Link from "next/link";

export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <Home />,
          text: "Home",
        },
        {
          link: "/teams",
          icon: <Users />,
          text: "Teams",
        },
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },

        {
          link: "/",
          icon: <ScrollText />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <aside className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
      <div>
        <UserItem></UserItem>
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link href={option.link} key={optionKey}>
                    <CommandItem className="cursor-pointer">
                      <i className="mr-2 text-gray-600">{option.icon}</i>
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </aside>
  );
};
