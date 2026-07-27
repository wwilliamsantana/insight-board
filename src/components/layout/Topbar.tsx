import { NotificationButton } from "./NotificationButton";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserAvatar } from "./UserAvatar";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white dark:bg-slate-900 text-slate-900 transition-colors dark:text-white dark:border-slate-800 px-8">
      <SearchBar />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NotificationButton />
        <UserAvatar />
      </div>
    </header>
  );
}
