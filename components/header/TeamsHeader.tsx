import { Notification } from "./Notification";

export const Header = () => {
  return (
    <div className="flex gap-4 p-4 border-b justify-end">
      <Notification></Notification>
    </div>
  );
};
