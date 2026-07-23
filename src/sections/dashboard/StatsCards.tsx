"use client";

import { StatsCard } from "./StatsCard";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

const cards = [
  {
    title: "Revenue",
    value: "$84,250",
    growth: "+18.4%",
    icon: DollarSign,
    color: "bg-green-500",
  },

  {
    title: "Orders",
    value: "2,431",
    growth: "+12.2%",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },

  {
    title: "Customers",
    value: "14,329",
    growth: "+8.7%",
    icon: Users,
    color: "bg-purple-500",
  },

  {
    title: "Conversion",
    value: "5.62%",
    growth: "+1.4%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
}
