import {
  MessageSquare,
  MailOpen,
  Clock3,
  Bell,
} from "lucide-react";

export const messageStats = [
  {
    title: "Total Messages",
    value: "2,458",
    growth: "+12%",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    title: "Unread",
    value: "48",
    growth: "+6%",
    icon: Bell,
    color: "bg-red-500",
  },
  {
    title: "Replied",
    value: "1,936",
    growth: "+9%",
    icon: MailOpen,
    color: "bg-green-500",
  },
  {
    title: "Avg. Response",
    value: "12m",
    growth: "-3%",
    icon: Clock3,
    color: "bg-orange-500",
  },
];