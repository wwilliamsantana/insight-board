import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-96 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
     dark:bg-slate-900 text-slate-900 dark:hover:bg-slate-800 transition-colors dark:text-white hover:bg-slate-100 dark:border-slate-800
    ">
      <Search size={18} className="text-slate-500" />

      <input
        placeholder="Search..."
        className="ml-3 w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
}
