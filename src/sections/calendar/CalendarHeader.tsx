import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export function CalendarHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Schedule Management
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Calendar
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Manage meetings, reminders and important events.
        </p>
      </div>

      <Button>
        <Plus size={18} />
        New Event
      </Button>
    </div>
  );
}