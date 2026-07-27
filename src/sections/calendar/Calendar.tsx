import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarStats } from "./CalendarStats";
import { UpcomingEvents } from "./UpcomingEvents";

export function Calendar() {
  return (
    <div className="space-y-8">
      <CalendarHeader />

      <CalendarStats />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <CalendarGrid />
        </div>

        <UpcomingEvents />
      </div>
    </div>
  );
}