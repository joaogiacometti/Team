"use client";

type NotificationType = {
  text: string;
  date: string;
  read: boolean;
};

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      text: "You have a new notification",
      date: "2022-01-01",
      read: true,
    },
    {
      text: "You have a new notification",
      date: "2022-01-01",
      read: false,
    },
  ]);

  return (
    <div className="flex items-center justify-end mr-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <div
              className={`absolute -top-2 -right-1 w-3 h-3 rounded-full my-1 ${
                notifications.find((n: NotificationType) => n.read === false)
                  ? "bg-green-500"
                  : "bg-neutral-200"
              }`}
            ></div>
            <BellIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-slate bg-white border rounded-xl overflow-hidden"
        >
          {notifications.map((notification: NotificationType, key: number) => (
            <DropdownMenuItem
              className="py-2 px-3 cursor-pointer outline-none hover:bg-neutral-100 transition flex items-start gap-2"
              key={key}
            >
              <div
                className={`w-3 h-3 rounded-full my-1 ${
                  !notification.read ? "bg-green-500" : "bg-neutral-200"
                }`}
              ></div>
              <div>
                <p>{notification.text}</p>
                <p className="text-xs text-neutral-500">{notification.date}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
