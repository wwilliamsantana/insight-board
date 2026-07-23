import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">Welcome back 👋</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Business Overview
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Track your business performance, monitor revenue, and analyze customer
          growth in real time.
        </p>
      </div>

      <Button>
        <Download size={18} />
        Export Report
      </Button>
    </div>
  );
}
