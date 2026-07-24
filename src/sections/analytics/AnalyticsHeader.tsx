import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function AnalyticsHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Analytics Dashboard
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Business Analytics
        </h1>
        <p className="mt-3 max-w-xl text-slate-500">
          Analyze your traffic, customer behavior, and revenue performance with
          detailed insights.
        </p>
      </div>

      <Button>
        <Download size={18} />
        Export Analytics
      </Button>
    </div>
  );
}
