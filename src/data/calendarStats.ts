import {
  CalendarDays,
  Clock3,
  Bell,
  CheckCircle2,
} from "lucide-react";

export const calendarStats = [
  {
    title: "Events",
    value: "248",
    growth: "+8%",
    icon: CalendarDays,
    color: "bg-blue-500",
  },
  {
    title: "Today",
    value: "8",
    growth: "+2",
    icon: Clock3,
    color: "bg-green-500",
  },
  {
    title: "Reminders",
    value: "14",
    growth: "+4%",
    icon: Bell,
    color: "bg-orange-500",
  },
  {
    title: "Completed",
    value: "196",
    growth: "+12%",
    icon: CheckCircle2,
    color: "bg-purple-500",
  },
];

export const upcomingEvents = [
  {
    title: "Design Review",
    time: "09:00 AM",
    date: "Jul 24",
  },
  {
    title: "Sprint Planning",
    time: "11:30 AM",
    date: "Jul 24",
  },
  {
    title: "Client Meeting",
    time: "03:00 PM",
    date: "Jul 25",
  },
];