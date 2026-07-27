export function SecuritySettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Security
      </h2>

      <div className="space-y-5">
        <button className="w-full rounded-xl border border-slate-200 p-3 text-left transition hover:bg-slate-50">
          Change Password
        </button>

        <button className="w-full rounded-xl border border-slate-200 p-3 text-left transition hover:bg-slate-50">
          Enable Two-Factor Authentication
        </button>

        <button className="w-full rounded-xl border border-red-200 p-3 text-left text-red-600 transition hover:bg-red-50">
          Delete Account
        </button>
      </div>
    </section>
  );
}