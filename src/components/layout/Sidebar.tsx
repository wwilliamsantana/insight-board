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
    active: true,
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: Users,
    label: "Customers",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
  },
  {
    icon: Package,
    label: "Products",
  },
  {
    icon: MessageSquare,
    label: "Messages",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white">
      <SidebarLogo />

      <nav className="flex-1 space-y-2 px-4">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>

      <SidebarProfile />
    </aside>
  );
}
