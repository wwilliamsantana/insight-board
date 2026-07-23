import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-96 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <Search size={18} className="text-slate-500" />

      <input
        placeholder="Search..."
        className="ml-3 w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
}
