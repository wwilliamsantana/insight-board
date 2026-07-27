interface Props {
  title: string;
  time: string;
  date: string;
};

export function EventCard({
  title,
  time,
  date,
}: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 p-5 transition hover:bg-slate-50">
      <p className="text-sm text-slate-500">
        {date}
      </p>

      <h3 className="mt-2 font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {time}
      </p>
    </article>
  );
}