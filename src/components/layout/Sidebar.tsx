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
    redirect: "/",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    active: false,
    redirect: "analytics",
  },
  {
    icon: Users,
    label: "Customers",
    active: false,
    redirect: "customers",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
    active: false,
    redirect: "orders",
  },
  {
    icon: Package,
    label: "Products",
    active: false,
    redirect: "products",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    active: false,
    redirect: "messages",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    active: false,
    redirect: "calendar",
  },
  {
    icon: Settings,
    label: "Settings",
    active: false,
    redirect: "settings",
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
