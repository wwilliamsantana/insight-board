import { NotificationSettings } from "./NotificationSettings";
import { PreferencesSettings } from "./PreferencesSettings";
import { ProfileSettings } from "./ProfileSettings";
import { SecuritySettings } from "./SecuritySettings";
import { SettingsHeader } from "./SettingsHeader";

export function Settings() {
  return (
    <div className="space-y-8">
      <SettingsHeader />

      <ProfileSettings />

      <div className="grid gap-6 lg:grid-cols-2">
        <NotificationSettings />

        <SecuritySettings />
      </div>

      <PreferencesSettings />
    </div>
  );
}