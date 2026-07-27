import { upcomingEvents } from "@/data/calendarStats";
import { EventCard } from "./EventCard";

export function UpcomingEvents() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-semibold">
        Upcoming Events
      </h2>

      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <EventCard
            key={event.title}
            {...event}
          />
        ))}
      </div>
    </section>
  );
}