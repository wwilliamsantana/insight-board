import { ShoppingCart, BadgeCheck, Clock3, RotateCcw } from "lucide-react";

export const orderStats = [
  {
    title: "Total Orders",
    value: "12,486",
    growth: "+12.8%",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },
  {
    title: "Completed",
    value: "10,924",
    growth: "+9.2%",
    icon: BadgeCheck,
    color: "bg-green-500",
  },
  {
    title: "Pending",
    value: "842",
    growth: "+4.5%",
    icon: Clock3,
    color: "bg-orange-500",
  },
  {
    title: "Refunded",
    value: "126",
    growth: "-1.8%",
    icon: RotateCcw,
    color: "bg-red-500",
  },
];
