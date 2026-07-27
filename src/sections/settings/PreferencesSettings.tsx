export function PreferencesSettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold">
        Preferences
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <select className="rounded-xl border border-slate-200 p-3">
          <option>English</option>
          <option>Portuguese</option>
          <option>Spanish</option>
        </select>

        <select className="rounded-xl border border-slate-200 p-3">
          <option>UTC -03:00</option>
          <option>UTC +00:00</option>
          <option>UTC +01:00</option>
        </select>
      </div>
    </section>
  );
}