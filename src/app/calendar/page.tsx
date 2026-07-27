import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Calendar } from "@/sections/calendar/Calendar";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Calendar",
  description: "View and organize events, meetings and schedules.",
};

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <Calendar />
    </DashboardLayout>
  )
}