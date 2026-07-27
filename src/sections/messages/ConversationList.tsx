import { ConversationCard } from "./ConversationCard";

const conversations = [
  {
    name: "Emma Johnson",
    message: "Could you update my subscription?",
    time: "2 min",
    unread: true,
  },
  {
    name: "Michael Brown",
    message: "Thanks for your support!",
    time: "18 min",
    unread: false,
  },
  {
    name: "Sophia Davis",
    message: "Payment has been completed.",
    time: "1 h",
    unread: false,
  },
];
// Exmaples
export function ConversationList() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Conversations
      </h2>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <ConversationCard
            key={conversation.name}
            {...conversation}
          />
        ))}
      </div>
    </section>
  );
}