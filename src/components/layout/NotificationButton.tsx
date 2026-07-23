import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button
      aria-label="Notifications"
      className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100"
    >
      <Bell size={20} />
    </button>
  );
}
