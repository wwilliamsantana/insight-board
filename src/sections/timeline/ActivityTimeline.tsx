"use client";

import { recentActivity } from "@/data/recentActivity";

import { ActivityItem } from "./ActivityItem";
import { TimelineHeader } from "./TimelineHeader";

export function ActivityTimeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">
      <TimelineHeader />

      <div className="space-y-1">
        {recentActivity.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
}
