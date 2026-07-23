interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ChartCard({ title, description, children }: Props) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>

      {children}
    </article>
  );
}
