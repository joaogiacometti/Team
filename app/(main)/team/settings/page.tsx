import { columns, Member } from "@/components/tableMembers/columns";
import { DataTable } from "@/components/tableMembers/members-table";

export default function Team() {
  const data: Member[] = [
    {
      id: "1234",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
    {
      id: "1235",
      name: "Jane Doe",
      email: "jane@example.com",
      role: "viewer",
    },
    {
      id: "1236",
      name: "Vincent",
      email: "vincent@example.com",
      role: "viewer",
    },
    {
      id: "1237",
      name: "Marc",
      email: "marc@example.com",
      role: "viewer",
    },
  ];

  return (
    <main>
      <header>
        <h2 className="text-[36px] from-neutral-700 mb-4">Team settings</h2>
      </header>
      <section>
        <DataTable columns={columns} data={data} />
      </section>
    </main>
  );
}
