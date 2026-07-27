import {
  Package,
  Archive,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export const productStats = [
  {
    title: "Total Products",
    value: "1,248",
    growth: "+6.8%",
    icon: Package,
    color: "bg-blue-500",
  },
  {
    title: "In Stock",
    value: "1,072",
    growth: "+3.1%",
    icon: Archive,
    color: "bg-green-500",
  },
  {
    title: "Best Sellers",
    value: "128",
    growth: "+14.2%",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
  {
    title: "Low Stock",
    value: "48",
    growth: "-2.4%",
    icon: AlertTriangle,
    color: "bg-orange-500",
  },
];