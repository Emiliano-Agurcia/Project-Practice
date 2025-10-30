"use client";

import { useState } from "react";
import ChatMessages from "./chat-messages";
import MessageInput from "./message-input";

export type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
};

type ChatViewProps = {
  initialMessages: Message[];
};

export default function ChatView({ initialMessages }: ChatViewProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot reply
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `You said: "${text}". I am a simple bot and can only echo your messages.`,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full h-screen max-w-6xl mx-auto shadow-2xl bg-chat-bg">
       <header className="p-4 border-b shadow-sm border-border">
        <h1 className="text-2xl font-bold text-foreground font-headline">ModernChat</h1>
       </header>
       <div className="flex flex-col flex-1 overflow-hidden">
        <ChatMessages messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}
