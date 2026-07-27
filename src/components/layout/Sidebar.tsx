"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";

import { SidebarProfile } from "./SidebarProfile";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  MessageSquare,
  CalendarDays,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    redirect: "/",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    redirect: "/analytics",
  },
  {
    icon: Users,
    label: "Customers",
    redirect: "/customers",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
    redirect: "/orders",
  },
  {
    icon: Package,
    label: "Products",
    redirect: "/products",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    redirect: "/messages",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    redirect: "/calendar",
  },
  {
    icon: Settings,
    label: "Settings",
    redirect: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900   dark:text-white">
      <SidebarLogo />

      <nav className="flex-1 space-y-2 px-4">
        {items.map((item) => (
          <SidebarItem
            key={item.label}
            {...item}
            active={pathname == item.redirect}
          />
        ))}
      </nav>

      <SidebarProfile />
    </aside>
  );
}
