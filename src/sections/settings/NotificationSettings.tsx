export function NotificationSettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:bg-slate-900 dark:border-slate-800">
      <h2 className="mb-6 text-xl font-semibold">
        Notifications
      </h2>

      <div className="space-y-5">
        <label className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between">
          <span>Push Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between">
          <span>Marketing Emails</span>
          <input type="checkbox" />
        </label>
      </div>
    </section>
  );
}