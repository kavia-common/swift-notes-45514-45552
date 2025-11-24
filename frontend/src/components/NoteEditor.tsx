"use client";

import { useEffect, useRef } from "react";
import { useNotesStore } from "@/lib/store";

export default function NoteEditor() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { note, updateNote } = useNotesStore((s) => {
    const note = s.notes.find((n) => n.id === s.selectedId) || null;
    return {
      note,
      updateNote: s.updateNote,
    };
  });

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [note?.content]);

  if (!note) return null;

  return (
    <div className="flex flex-col h-full">
      <input
        value={note.title}
        onChange={(e) => updateNote(note.id, { title: e.target.value })}
        className="w-full text-2xl font-semibold p-2 outline-none bg-transparent"
        placeholder="Title"
        aria-label="Note title"
      />
      <textarea
        ref={textareaRef}
        value={note.content}
        onChange={(e) => updateNote(note.id, { content: e.target.value })}
        className="flex-1 resize-none p-2 outline-none bg-transparent"
        placeholder="Start writing..."
        aria-label="Note content"
      />
    </div>
  );
}
