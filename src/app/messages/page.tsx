import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Messages } from "@/sections/messages/Messages";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Messages",
  description: "Manage conversations with customers and team members.",
};

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <Messages />
    </DashboardLayout>
  )
}