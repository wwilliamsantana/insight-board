import { ChartNoAxesCombined } from "lucide-react";

export function SidebarLogo() {
  return (
    <div className="flex items-center gap-3 px-6 py-8">
      <div className="rounded-xl bg-blue-600 p-3 text-white">
        <ChartNoAxesCombined size={22} />
      </div>

      <div>
        <h1 className="text-lg font-bold">InsightBoard</h1>

        <p className="text-sm text-slate-500">Analytics Platform</p>
      </div>
    </div>
  );
}
