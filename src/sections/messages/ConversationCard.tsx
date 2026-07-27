interface Props {
  name: string;
  message: string;
  time: string;
  unread: boolean;
};

export function ConversationCard({
  name,
  message,
  time,
  unread,
}: Props) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:bg-slate-50 dark:border-slate-900 hover:dark:bg-slate-800">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
        {name.charAt(0)}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>

          <span className="text-xs text-slate-500">
            {time}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          {message}
        </p>
      </div>

      {unread && (
        <span className="h-3 w-3 rounded-full bg-blue-600" />
      )}
    </button>
  );
}