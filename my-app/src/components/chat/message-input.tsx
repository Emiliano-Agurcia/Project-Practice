"use client";

import { useRef, useState, type FormEvent } from "react";
import { Send, Image, X } from "lucide-react";
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
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleImageButton = () => {
    if (imagePreview) { // Cancelar imagen
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {// Abrir file chooser
      fileInputRef.current?.click();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border">
      <div className="flex items-center space-x-3">
        <Input type="text" placeholder="Type a message..." className="flex-1" value={text} onChange={(e) => setText(e.target.value)}  autoComplete="off" />
        
        <Button id="btIMG" type="button" variant="terciary" onClick={handleImageButton} className={`${imagePreview ? "group" : ""} relative size-10 rounded-[13px] overflow-hidden flex items-center justify-center transition-all md:w-30`} aria-label={imagePreview ? "Cancel image" : "Upload image"}>
          <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileChange} />

          {imagePreview ? ( /* Cuando hay img */
            <>
              <img src={imagePreview} alt="Preview" className="absolute inset-0 object-cover w-full h-full" />
              
              <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-red-500/60 group-hover:opacity-100">
                <X className="w-5 h-5 text-white" />
              </div>
            </>
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
