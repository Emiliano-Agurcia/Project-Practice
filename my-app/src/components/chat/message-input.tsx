"use client";

import { useRef, useState, type FormEvent } from "react";
import { Send, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type MessageInputProps = {
  onSend: (text: string) => void;
};

export default function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const btIMG = document.getElementById('btIMG');
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }

    // Reset button height after image is loaded (if hover:h-15)
    /*if (btIMG) {
      (btIMG as HTMLElement).style.height.;
    }*/
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border">
      <div className="flex items-center space-x-3">
        <Input type="text" placeholder="Type a message..." className="flex-1" value={text} onChange={(e) => setText(e.target.value)}  autoComplete="off" />

        <Button id="btIMG" type="button" variant="terciary" className="md:w-30 relative overflow-hidden rounded-[13px]" size="icon" aria-label="Upload image" onClick={() => fileInputRef.current?.click()}>
          <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileChange}/>

          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="absolute inset-0 flex object-cover w-full h-full" />
          ) : (
            <Image className="w-5 h-5" />
          )}
        </Button>

        <Button type="submit" variant="secondary" size="icon" aria-label="Send message">
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
}