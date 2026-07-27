import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button
      aria-label="Notifications"
      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors hover:bg-slate-100 p-3"
    >
      <Bell size={20} />
    </button>
  );
}
