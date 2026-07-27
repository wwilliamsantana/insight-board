import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Settings } from "@/sections/settings/Settings";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage account preferences and application settings.",
};

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Settings />
    </DashboardLayout>
  )
}