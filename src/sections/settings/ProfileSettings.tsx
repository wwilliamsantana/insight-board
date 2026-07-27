export function ProfileSettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold">
        Profile Information
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <input
          className="rounded-xl border border-slate-200 p-3 outline-none focus:border-blue-500"
          defaultValue="William Santana"
        />

        <input
          className="rounded-xl border border-slate-200 p-3 outline-none focus:border-blue-500"
          defaultValue="william@example.com"
        />

        <input
          className="rounded-xl border border-slate-200 p-3 outline-none focus:border-blue-500"
          defaultValue="InsightBoard Inc."
        />

        <input
          className="rounded-xl border border-slate-200 p-3 outline-none focus:border-blue-500"
          defaultValue="Frontend Developer"
        />
      </div>
    </section>
  );
}