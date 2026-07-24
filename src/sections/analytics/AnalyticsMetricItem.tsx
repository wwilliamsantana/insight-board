import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
}

export function AnalyticsMetricItem({
  title,
  value,
  change,
  positive,
  icon: Icon,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:bg-slate-50">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-slate-100 p-3">
          <Icon size={22} className="text-slate-700" />
        </div>

        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
        </div>
      </div>

      <div
        className={`flex items-center gap-1 text-sm font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        {change}
      </div>
    </div>
  );
}
