import {
  CreditCard,
  UserPlus,
  ShoppingCart,
  Settings,
  Package,
} from "lucide-react";

export const recentActivity = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "New order received",
    description: "Emma Johnson purchased Premium Plan",
    time: "2 min ago",
    color: "bg-blue-500",
  },

  {
    id: 2,
    icon: CreditCard,
    title: "Payment confirmed",
    description: "Invoice #1024 has been paid",
    time: "18 min ago",
    color: "bg-green-500",
  },

  {
    id: 3,
    icon: UserPlus,
    title: "New customer",
    description: "Lucas Martins created an account",
    time: "1 hour ago",
    color: "bg-purple-500",
  },

  {
    id: 4,
    icon: Package,
    title: "Product updated",
    description: "Business Plan pricing changed",
    time: "3 hours ago",
    color: "bg-orange-500",
  },

  {
    id: 5,
    icon: Settings,
    title: "System update",
    description: "Analytics module configured",
    time: "Yesterday",
    color: "bg-slate-500",
  },
];
