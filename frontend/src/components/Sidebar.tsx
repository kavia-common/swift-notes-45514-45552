"use client";

import Link from "next/link";
import { useNotesStore } from "@/lib/store";

export default function Sidebar() {
  const { createNote, notes, selectedId } = useNotesStore((s) => ({
    createNote: s.createNote,
    notes: s.notes,
    selectedId: s.selectedId,
  }));

  return (
    <aside className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Swift Notes</h2>
        <button
          onClick={createNote}
          className="rounded-md bg-blue-600 text-white px-2 py-1 text-sm hover:bg-blue-500"
          aria-label="Create new note"
        >
          +
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {notes.length === 0 ? (
          <p className="px-4 text-sm text-gray-500">No notes yet</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <Link
                  href={`/note/${note.id}`}
                  className={`block px-4 py-2 truncate ${
                    selectedId === note.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {note.title || "Untitled"}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
