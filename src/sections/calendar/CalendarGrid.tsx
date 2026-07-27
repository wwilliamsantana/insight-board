export function CalendarGrid() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          July 2026
        </h2>

        <span className="text-sm text-slate-500">
          Monthly View
        </span>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div
            key={day}
            className="py-2 text-sm font-semibold text-slate-500"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 text-sm transition hover:bg-slate-100 hover:dark:bg-slate-800 dark:border-slate-800"
          >
            {index + 1 <= 31 ? index + 1 : ""}
          </div>
        ))}
      </div>
    </section>
  );
}