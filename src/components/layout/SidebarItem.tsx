import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  redirect: string;
};

export function SidebarItem({
  icon: Icon,
  label,
  active,
  redirect,
}: SidebarItemProps) {
  return (
    <Link
      href={redirect}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      <Icon size={20} />

      {label}
    </Link>
  );
}
