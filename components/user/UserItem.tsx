import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserItem = () => {
  return (
    <div className="flex items-start gap-2 border rounded-xl p-2">
      <div className="mr-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-[16px] font-bold">User Test</p>
        <p className="text-[12px] font-neutral-500">user.test@gmail.com</p>
      </div>
    </div>
  );
};
