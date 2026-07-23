import { NotificationButton } from "./NotificationButton";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserAvatar } from "./UserAvatar";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <SearchBar />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NotificationButton />
        <UserAvatar />
      </div>
    </header>
  );
}
