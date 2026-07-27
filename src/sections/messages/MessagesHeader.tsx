import { Button } from "@/components/ui/Button";
import { PenSquare } from "lucide-react";

export function MessagesHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Communication Center
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Messages
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Manage conversations with customers and your team.
        </p>
      </div>

      <Button>
        <PenSquare size={18} />
        New Message
      </Button>
    </div>
  );
}