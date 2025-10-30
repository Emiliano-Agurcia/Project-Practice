import ChatView from "@/components/chat/chat-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initialMessages = [
  {
    id: "1",
    sender: "bot" as const,
    text: "Hello! I'm a chat bot. How can I help you today?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: "2",
    sender: "user" as const,
    text: "Hey! I'd like to know more about this chat interface.",
    timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
  },
  {
    id: "3",
    sender: "bot" as const,
    text: "Certainly! This is a responsive chat interface built with Next.js and Tailwind CSS. It features a minimalist design with a focus on readability and user experience. Messages are displayed in clean chat bubbles.",
    timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
      </div>
      <ChatView initialMessages={initialMessages} />
    </div>
  );
}
