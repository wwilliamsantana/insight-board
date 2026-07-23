import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      aria-label="Toggle theme"
      className="rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100"
    >
      <Moon size={20} />
    </button>
  );
}
