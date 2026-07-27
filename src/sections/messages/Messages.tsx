import { ConversationList } from "./ConversationList";
import { MessagePreview } from "./MessagePreview";
import { MessagesHeader } from "./MessagesHeader";
import { MessagesStats } from "./MessagesStats";

export function Messages() {
  return (
    <div className="space-y-8">
      <MessagesHeader />
      <MessagesStats />

      <div className="grid gap-6 xl:grid-cols-3">
        <ConversationList />

        <div className="xl:col-span-2">
          <MessagePreview />
        </div>
      </div>
    </div>
  );
}