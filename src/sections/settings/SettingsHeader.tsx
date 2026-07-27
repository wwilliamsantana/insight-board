import { Button } from "@/components/ui/Button";
import { Save } from "lucide-react";

export function SettingsHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Account Settings
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Manage your account preferences and application settings.
        </p>
      </div>

      <Button>
        <Save size={18} />
        Save Changes
      </Button>
    </div>
  );
}