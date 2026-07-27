
// Examples
export function MessagePreview() {
  return (
    <section className="flex h-full min-h-105 flex-col rounded-3xl border border-slate-200 bg-white p-8">
      <h2 className="text-xl font-semibold">
        Emma Johnson
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Online • Last seen 2 minutes ago
      </p>

      <div className="mt-8 flex-1 space-y-4">
        <div className="max-w-md rounded-2xl bg-slate-100 p-4">
          Hi! Could you update my subscription to the Premium plan?
        </div>

        <div className="ml-auto max-w-md rounded-2xl bg-blue-600 p-4 text-white">
          Of course! Your subscription has been updated successfully.
        </div>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </section>
  );
}