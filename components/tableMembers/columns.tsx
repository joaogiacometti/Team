"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Member = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-right">Nome</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("name")}</div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">E-mail</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">{row.getValue("email")}</div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-center">Role</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <Badge className={`tag ${row.getValue("role")}`}>
            {row.getValue("role")}
          </Badge>
        </div>
      );
    },
  },
];
